from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from django.db.models import Count, Q, Exists, OuterRef
from .models import Tweet, Like, Retweet, Bookmark, Follow
from .serializers import TweetSerializer, UserProfileSerializer
from drf_spectacular.utils import extend_schema
from django.db.models import F


User = get_user_model()

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def follow(self, request, pk=None):
        target_user = self.get_object()

        if request.user == target_user:
            return Response(
                {"detail": "You cannot follow yourself."},
                status=status.HTTP_400_BAD_REQUEST
            )
        follow_instance, created = Follow.objects.get_or_create(
            follower=request.user,
            following=target_user
        )

        if not created:
            return Response(
                {"detail": "You are already following this user."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"detail": f"You are now following {target_user.username}."},
            status=status.HTTP_201_CREATED
        )

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def unfollow(self, request, pk=None):
        target_user = self.get_object()

        deleted_count, _ = Follow.objects.filter(
            follower=request.user,
            following=target_user
        ).delete()

        if deleted_count == 0:
            return Response(
                {"detail": f"You are not following {target_user.username}."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"detail": f"You have unfollowed {target_user.username}."},
            status=status.HTTP_200_OK
        )

    @action(detail=True, methods=['get'])
    def tweets(self, request, pk=None):
        target_user = self.get_object()
        user_tweets = Tweet.objects.filter(author=target_user)

        page = self.paginate_queryset(user_tweets)
        if page is not None:
            serializer = TweetSerializer(page, many=True, context={'request': request})
            return self.get_paginated_response(serializer.data)

        serializer = TweetSerializer(user_tweets, many=True, context={'request': request})
        return Response(serializer.data)
    

class TweetViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = TweetSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        user = self.request.user

        # Base QuerySet with relationship optimizations
        queryset = Tweet.objects.all().select_related(
            'author', 'parent', 'parent__author'
        ).prefetch_related('media')

        # Annotate total counts directly from database relationships
        queryset = queryset.annotate(
            likes_count=Count('likes', distinct=True),
            retweets_count=Count('retweets', distinct=True),
            replies_count=Count(
                'replies', 
                filter=Q(replies__tweet_type=Tweet.TweetType.REPLY), 
                distinct=True
            )
        )

        # Annotate boolean flags if user is authenticated
        if user.is_authenticated:
            queryset = queryset.annotate(
                is_liked=Exists(Like.objects.filter(user=user, tweet=OuterRef('pk'))),
                is_retweeted=Exists(Retweet.objects.filter(user=user, tweet=OuterRef('pk'))),
                is_bookmarked=Exists(Bookmark.objects.filter(user=user, tweet=OuterRef('pk'))),
            )

        return queryset

    @extend_schema(request=None, responses={201: dict, 200: dict})
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def like(self, request, pk=None):
        tweet = self.get_object()
        like, created = Like.objects.get_or_create(user=request.user, tweet=tweet)
        if not created:
            like.delete()
            return Response({"detail": "Unliked tweet."}, status=status.HTTP_200_OK)
        return Response({"detail": "Liked tweet."}, status=status.HTTP_201_OK)

    @extend_schema(request=None, responses={201: dict, 200: dict})
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def retweet(self, request, pk=None):
        tweet = self.get_object()
        retweet, created = Retweet.objects.get_or_create(user=request.user, tweet=tweet)
        if not created:
            retweet.delete()
            return Response({"detail": "Unretweeted tweet."}, status=status.HTTP_200_OK)
        return Response({"detail": "Retweeted tweet."}, status=status.HTTP_201_OK)

    @extend_schema(request=None, responses={201: dict, 200: dict})
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated])
    def bookmark(self, request, pk=None):
        tweet = self.get_object()
        bookmark, created = Bookmark.objects.get_or_create(user=request.user, tweet=tweet)
        if not created:
            bookmark.delete()
            return Response({"detail:": "Removed bookmark."}, status=status.HTTP_200_OK)
        return Response({"detail:": "Bookmarked tweet."}, status=status.HTTP_201_OK)

    @extend_schema(summary="Get Home Feed", description="Fetch tweets from users followed by the authenticated user.")
    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def feed(self, request):
        following_user_ids =Follow.objects.filter(
            follower=request.user
        ).values_list('following_id', flat=True)

        feed_authors = list(following_user_ids) + [request.user.id]

        queryset = Tweet.objects.filter(author_id__in=feed_authors).order_by('-created_at')

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @extend_schema(summary="Get Explore Feed", description="Fetch top trending tweets sorted by combined engagement (likes + retweets).")
    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticatedOrReadOnly])
    def explore(self, request):
        queryset = self.get_queryset().annotate(
            engagement=F('likes_count') + F('retweets_count')
        ).order_by('-engagement', '-created_at')

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
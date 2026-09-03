from rest_framework import viewsets
from django.db.models import Count, Q, Exists, OuterRef
from .models import Tweet, Like, Retweet, Bookmark
from .serializers import TweetSerializer


class TweetViewSet(viewsets.ModelViewSet):
    serializer_class = TweetSerializer

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
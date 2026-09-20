from rest_framework import serializers
from .models import Tweet, TweetMedia, Like, Retweet, Bookmark, Follow
from django.contrib.auth import get_user_model
# from django.contrib.auth.models import User

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
        


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class UserProfileSerializer(serializers.ModelSerializer):
    followers_count = serializers.SerializerMethodField()
    following_count =serializers.SerializerMethodField()
    tweets_count = serializers.SerializerMethodField()
    is_following = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name', 
            'last_name', 'email', 
            'followers_count', 
            'following_count', 
            'tweets_count', 
            'is_following', 
            'date_joined', 
            'last_login']

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()

    def get_tweets_count(self, obj):
        return obj.tweets.filter(tweet_type=Tweet.TweetType.ORIGINAL).count()

    def get_is_following(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return Follow.objects.filter(follower=request.user, following=obj).exists()
        return False


class TweetMediaSerializer(serializers.ModelSerializer):
    class Meta :
        model = TweetMedia
        fields = ['id', 'tweet', 'file', 'media_type']

class TweetSerializer(serializers.ModelSerializer):
    author_detail = UserSerializer(source='author', read_only=True)
    media = TweetMediaSerializer(many=True, read_only=True)

    # Annotated integer counts
    likes_count = serializers.IntegerField(read_only=True, default=0)
    retweets_count = serializers.IntegerField(read_only=True, default=0)
    replies_count = serializers.IntegerField(read_only=True, default=0)

    # User context flags
    is_liked = serializers.BooleanField(read_only=True, default=False)
    is_retweeted = serializers.BooleanField(read_only=True, default=False)
    is_bookmarked = serializers.BooleanField(read_only=True, default=False)

    class Meta:
        model = Tweet
        fields = [
            'id', 
            'author', 
            'author_detail', 
            'content', 
            'tweet_type', 
            'likes_count', 
            'retweets_count', 
            'replies_count', 
            'is_liked', 
            'is_retweeted', 
            'is_bookmarked', 
            'media', 
            'created_at', 
            'updated_at', 
            'parent'
        ]
        read_only_fields = ['author', 'tweet_type']

    def get_likes_count(self, obj):
        # Uses annotated value if available; falls back to DB count
        return getattr(obj, 'likes_count', obj.likes.count())

    def get_retweets_count(self, obj):
        return getattr(obj, 'retweets_count', obj.retweets.count())

    def get_replies_count(self, obj):
        return getattr(obj, 'replies_count', obj.replies.filter(tweet_type=Tweet.TweetType.REPLY).count())

    def get_fields(self):
        fields = super().get_fields()
        fields['parent_details'] = TweetSerializer(source='parent', read_only=True)
        return fields

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user

        parent = validated_data.get('parent')
        if parent:
            request_type = self.context['request'].data.get('tweet_type')
            if request_type == Tweet.TweetType.QUOTE:
                validated_data['tweet_type'] = Tweet.TweetType.QUOTE
            else:
                validated_data['tweet_type'] = Tweet.TweetType.REPLY

        return super().create(validated_data)
       
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'user', 'tweet', 'created_at']
        read_only_fields = ['user']
    
class RetweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retweet
        fields = ['id', 'user', 'tweet', 'created_at']
        read_only_fields = ['user']
    
class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['id', 'user', 'tweet', 'created_at']
        read_only_fields = ['user']


from rest_framework import serializers
from .models import Tweet, TweetMedia
from django.contrib.auth import get_user_model

user = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ['id', 'username']


class TweetMediaSerializer(serializers.ModelSerializer):
    class Meta :
        model = TweetMedia
        fields = ['id', 'tweet', 'file', 'media_type']

class TweetSerializer(serializers.ModelSerializer):
    media = TweetMediaSerializer(many=True, read_only=True)
    author_detail = UserSerializer(source='author', read_only=True)
    replies_count = serializers.IntegerField(source='replies.count', read_only=True)

    class Meta:
        model = Tweet
        fields = ['id', 'author', 'author_detail', 'content', 'media', 'created_at', 'updated_at', 'parent', 'replies_count']
        read_only_fields = ['author']

    def create(slef, validated_data):
        validated_data['author'] = slef.context['request'].user
        return super.create(validated_data)


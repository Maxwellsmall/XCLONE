from rest_framework import serializers
from .models import Tweet, TweetMedia

class TweetMediaSerializer(serializers.ModelSerializer):
    class Meta :
        model = TweetMedia
        fields = ['id', 'tweet', 'file', 'media_type']

class TweetSerializer(serializers.ModelSerializer):
    media = TweetMediaSerializer(many=True, read_only=True)

    class Meta:
        model = Tweet
        fields = ['id', 'author', 'content', 'media', 'created_at', 'updated_at', 'parent']


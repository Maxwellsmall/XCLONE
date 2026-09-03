from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Tweet(models.Model):
    # TWEET TYPE: ORIGINAL, QUOTE, REPLY
    class TweetType(models.TextChoices):
        ORIGINAL = 'ORIGINAL', 'Original'
        QUOTE = 'QUOTE', 'Quote'
        REPLY = 'REPLY', 'Reply'

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tweets')
    content = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')
    tweet_type = models.CharField(max_length=10, choices=TweetType.choices, default=TweetType.ORIGINAL, db_index=True)

    def __str__(self):
        return f"{self.author.username} ({self.tweet_type}): {self.content[:50] if self.content else 'Media/Repost'}"

class TweetMedia(models.Model):
    class MediaType(models.TextChoices):
        IMAGE = 'IMAGE', 'Image'
        AUDIO = 'AUDIO', 'Audio'
        VIDEO = 'VIDEO', 'Video'
        DOCUMENT = 'DOCUMENT', 'Document'

    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='media')
    file = models.FileField(upload_to='tweet/media/')
    media_type = models.CharField(max_length=10, choices=MediaType.choices, default=MediaType.IMAGE)

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='likes')
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='likes')
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'tweet'], name='unique_user_tweet_like')
        ]

class Retweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='retweets')
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='retweets')
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'tweet'], name='unique_user_tweet_retweet')
        ]

class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookmarks')
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='bookmarks')
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'tweet'], name='unique_user_tweet_bookmark')
        ]
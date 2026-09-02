from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Tweet(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')

    def __str__(self):
        return f"{self.author.username} : {self.content[:50]}..."

class TweetMedia(models.Model):
    class MediaType(models.TextChoices):
        IMAGE = 'IMAGE', 'Image'
        AUDIO = 'AUDIO', 'Audio'
        VIDEO = 'VIDEO', 'Video'
        DOCUMENT = 'DOCUMENT', 'Document'

    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE, related_name='media')
    file = models.FileField(upload_to='tweet/media/')
    media_type = models.CharField(max_length=10, choices=MediaType.choices, default=MediaType.IMAGE)
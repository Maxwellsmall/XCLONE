from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Follow, Like, Retweet, Tweet, Notification

@receiver(post_save, sender=Follow)
def create_follow_notification(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            recipient=instance.following,
            sender=instance.follower,
            notification_type=Notification.NotificationType.FOLLOW
        )

@receiver(post_save, sender=Like)
def create_like_notification(sender, instance, created, **kwargs):
    if created and instance.tweet.author != instance.user:
        Notification.objects.create(
            recipient=instance.tweet.author,
            sender=instance.user,
            notification_type=NotificationType.LIKE,
            tweet=instance.tweet
        )

@receiver(post_save, sender=Retweet)
def create_retweet_notification(sender, instance, created, **kwargs):
    if created and instance.tweet.author != instance.user:
        Notification.objects.create(
            recipient=instance.tweet.author,
            sender=instance.user,
            notification_type=Notification.NotificationType.RETWEET,
            tweet=instance.tweet
        )

@receiver(post_save, sender=Tweet)
def create_reply_notification(sender, instance, created, **kwargs):
    if created and instance.parent and instance.parent.author != instance.author:
        Notification.objects.create(
            recipient=instance.parent.author, 
            sender=instance.author,
            notification_type=Notification.NotificationType.REPLY,
            tweet=instance.parent
        )
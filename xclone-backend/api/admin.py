from django.contrib import admin
from .models import Tweet, TweetMedia, Like, Retweet, Bookmark

# Register your models here.
class TweetMediaInline(admin.TabularInline):
    model = TweetMedia
    extra = 1 # Number of extra forms to display
    fields = ['file', 'media_type']

@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    list_display = [
        'id', 
        'author', 
        'tweet_type', 
        'content_preview', 
        'parent', 
        'likes_count', 
        'retweets_count', 
        'created_at'
    ]
    list_filter = ['tweet_type', 'created_at', 'updated_at']
    raw_id_fields = ['author', 'parent']
    search_fields = ['content', 'author__username']
    inlines = [TweetMediaInline]

    @admin.display(description='Content')
    def content_preview(self, obj):
        if not obj.content:
            return "[Media / Standard Post]"
        return obj.content[:50] + ('...' if len(obj.content) > 50 else '')
    
    @admin.display(description='Likes')
    def likes_count(self, obj):
        return obj.likes.count()

    @admin.display(description='Retweets')
    def retweets_count(self, obj):
        return obj.retweets.count()
    

@admin.register(TweetMedia)
class TweetMediaAdmin(admin.ModelAdmin):
    list_display = ['id', 'tweet', 'media_type', 'file']
    list_filter = ['media_type']
    search_fields = ['tweet__content', 'tweet__author__username']


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'tweet', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'tweet__content']
    raw_id_fields = ['user', 'tweet']


@admin.register(Retweet)
class RetweetAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'tweet', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'tweet__content']
    raw_id_fields = ['user', 'tweet']


@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'tweet', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'tweet__content']
    raw_id_fields = ['user', 'tweet']
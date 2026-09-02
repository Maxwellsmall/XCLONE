from django.contrib import admin
from .models import Tweet, TweetMedia

# Register your models here.
class TweetMediaInline(admin.TabularInline):
    model = TweetMedia
    extra = 1 # Number of extra forms to display
    fields = ['file', 'media_type']

@admin.register(Tweet)
class TweetAdmin(admin.ModelAdmin):
    list_display = ['id', 'parent', 'author', 'content', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['content', 'author__username']
    inlines = [TweetMediaInline]

    @admin.display(description='Content')
    def content_preview(self, obj):
        return obj.content[:50] + ('...' if len(obj.content) > 50 else '')

@admin.register(TweetMedia)
class TweetMediAdmin(admin.ModelAdmin):
    list_display = ['id', 'tweet', 'media_type', 'file']
    list_filter = ['media_type']
    search_fields = ['tweet__content', 'tweet__author__username']
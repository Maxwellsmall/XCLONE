from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tweets', views.TweetViewSet, basename = 'tweet')

urlpatterns = [
    # Define your URL patterns here
    path('', include(router.urls)),
]
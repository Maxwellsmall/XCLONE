from django.urls import path
from . import views
from rest_framework.router import DefaultRouter

router = DefaultRouter()
router.register(r'tweets', views.TweetViewSet, basename = 'tweet')

urlpatterns = [
    # Define your URL patterns here
    path('', router.urls),
]
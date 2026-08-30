from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Tweet
from .serializers import TweetSerializer

# Create your views here.
def index(request):
    return HttpResponse("<h1>Welcome to the XClone Backend!</h1>")

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
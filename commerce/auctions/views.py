from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.db.models import Max
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import login_required
from .models import ListingForm, Listing, UserListing, BiddingForm, CommentForm, Bid, Comment
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view 
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import User
from .models import Listing
from .serializers import ListingSerializer, CommentSerializer


class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    

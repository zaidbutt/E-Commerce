from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import login_required
from .models import ListingForm, Listing, UserListing, BiddingForm, CommentForm, Bid, Comment
from rest_framework import generics, permissions
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import User
from .models import Listing
from .serializers import RegisterSerializer, LoginSerializer, ListingSerializer, CommentSerializer, UserSerializer, BidSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.db import IntegrityError
from django.utils.decorators import method_decorator
from rest_framework.authtoken.views import ObtainAuthToken
import json




@method_decorator(csrf_exempt, name='dispatch')
class Register(APIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def post(self, request):    
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        print(f"{username}, {password}, {email}" )
        confirmPassword = request.data['confirmPassword']
        if password != confirmPassword:
            return Response({"message": "Passwords must match."
            })
        
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            token, _ = Token.objects.get_or_create(user=user)
            #login(request, user)
            return Response({"message":"User saved Successfully", "token":token.key})
        except IntegrityError:
            return Response({"message": "Username already taken."
            })

            
@method_decorator(csrf_exempt, name='dispatch')
class LoginView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
    serializer_class= LoginSerializer
    queryset=User.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = [AllowAny]
    @csrf_exempt
    def post(self,request):        
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:            
            if user.is_active:
                # print("here")
                
                # token, _ = Token.objects.get_or_create(user=user)
                # print(token)
                # data = {
                #     'Token':token.key
                # }
                login(request, user)
                return Response({"user_id":user.id}, status=status.HTTP_200_OK)
            return Response(user,status=status.HTTP_400_BAD_REQUEST )
        return Response(user, status=status.HTTP_404_NOT_FOUND)


class Logout(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        logout(request)
        return Response({"message": "Logged out"},status=status.HTTP_200_OK)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #authentication_classes = (TokenAuthentication,)
    permission_classes = [IsAuthenticated]
    


class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

    def create(self, request):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    def perform_create(self, serializer):
        serializer.save(created_by= self.request.user)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer

    

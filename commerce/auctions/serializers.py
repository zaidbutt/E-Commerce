from .models import Listing, Comment, User, Bid
from rest_framework import serializers
from rest_framework import permissions


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Passwords Must Match',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )
    confirmPassword = serializers.CharField(
        write_only=True,
        required=True,
        help_text='Passwords Must Match',
        style={'input_type': 'password', 'placeholder': 'Password'}
    )


class LoginSerializer(serializers.ModelSerializer):
     class Meta:
         model=User
         fields=('username','password',) 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]



class ListingSerializer(serializers.ModelSerializer):
    
    class Meta:
            PRODUCT_CHOICES = (
            ('E', "ELECTRONICS"),
            ('H', "HOME"),
            ('T', "TOY"),
            ('E', "EDUCATION")        
        )
        
        
            category = serializers.ChoiceField(choices = PRODUCT_CHOICES)
            model = Listing
            fields = ["id",'title', 'description', 'image', 'category', 'start_price', 'created_by']
        


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["listing", "user", 'comment']


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ["user",'bid_price']
        
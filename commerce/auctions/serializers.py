from .models import Listing, Comment, User, Bid
from rest_framework import serializers



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ["id",'title', 'description', 'image', 'category', 'start_price']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["user",'comment']


class BiddingForm(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ["user",'bid_price']
        
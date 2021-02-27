from .models import Listing, Comment
from rest_framework import serializers


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ["id",'title', 'description', 'image', 'category', 'start_price']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["user",'comment']
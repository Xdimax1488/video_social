from os import read
from django.db.models import fields
from rest_framework import serializers
from .models import Category, Videopost, Comment


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
class CommentSerializer(serializers.ModelSerializer):
    name = serializers.SlugRelatedField(slug_field='first_name',read_only=True)
    class Meta:
        model= Comment
        fields = ('name','body','created')

class VideopostSerializer(serializers.ModelSerializer):
    # вывод категории по имени, а не по ID
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    author = serializers.SlugRelatedField(slug_field='first_name', read_only=True)
    comments = CommentSerializer(many = True)

    class Meta:
        model = Videopost
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategoryDatailSerializer(serializers.ModelSerializer):
    videos = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    @staticmethod
    def get_videos(obj):
        return VideopostSerializer(Videopost.objects.filter(category=obj), many=True).data



from os import read
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Category, Videopost, Comment, Author


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    name = serializers.SlugRelatedField(
        slug_field='first_name', read_only=True)

    class Meta:
        model = Comment
        fields = ('name', 'body', 'created')


class VideopostSerializer(serializers.ModelSerializer):
    # вывод категории по имени, а не по ID
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)
    author = serializers.SlugRelatedField(
        slug_field='first_name', read_only=True)
    comments = CommentSerializer(many=True)

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

class AuthorSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field='is_active', read_only=True)
    class Meta:
        model = Author
        fields = '__all__'

class AuthorDatailSerializer(serializers.ModelSerializer):
    
    user = serializers.SlugRelatedField(slug_field='username', read_only=True)
    video = serializers.SerializerMethodField()
    class Meta:
        model = Author
        fields = '__all__'

    @staticmethod
    def get_video(obj):
        return VideopostSerializer(Videopost.objects.filter(author=obj), many=True).data

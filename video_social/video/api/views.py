from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import Category, Videopost, Comment, Author
from ..serializers import CategorySerializer, VideopostSerializer, CategoryDatailSerializer, CommentCreateSerializer, AuthorSerializer,AuthorDatailSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    action_to_serializer = {
        "retrieve": CategoryDatailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class

        )


class VideopostViewSet(viewsets.ModelViewSet):
    queryset = Videopost.objects.all()
    serializer_class = VideopostSerializer


class CommentCreateViewSet(viewsets.ModelViewSet):
    '''Добавления комента'''
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()

    serializer_class = AuthorSerializer

    action_to_serializer = {
        "retrieve": AuthorDatailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class

        )

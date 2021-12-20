from django.urls import path
from rest_framework import routers
from .views import CategoryViewSet, VideopostViewSet, CommentCreateViewSet

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('videos', VideopostViewSet, basename='videos')
router.register('comment', CommentCreateViewSet,basename = 'comment')

urlpatterns = []

urlpatterns += router.urls

from django.urls import path
from .views import VideopostList

urlpatterns = [
    path('', VideopostList.as_view(), name='posts')
]

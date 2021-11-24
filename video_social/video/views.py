from django.shortcuts import render
from django.views.generic import ListView

from .models import *


# Create your views here.

class VideopostList(ListView):
    model = Videopost
    template_name = 'videopost.html'
    context_object_name = 'videopost'
    ordering = ['-published']

from django.shortcuts import render
from django.views.generic import ListView

from .models import *


# Create your views here.

class VideopostList(ListView):
    model = Videopost
    template_name = 'video/videopost.html'
    context_object_name = 'videopost'
    ordering = ['-published']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['category_music'] = Category.objects.get(name='музыка').id
        context['category_sport'] = Category.objects.get(name='спорт').id
        context['category_politics'] = Category.objects.get(name='политика').id
        context['category_hepens'] = Category.objects.get(
            name='Развлечения').id
        context['category_Games'] = Category.objects.get(name='Игры').id

        return context

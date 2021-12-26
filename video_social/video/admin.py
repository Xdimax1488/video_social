from django.contrib import admin
from django.utils.html import format_html
from .models import *


# Register your models here.
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    def image_tagg(self, obj):
        return format_html('<img src="{}" style="width: 50px; height: 50px;"/>'.format(obj.avatar.url))

    image_tagg.short_description = 'изображение'
    list_display = ['user', 'first_name', 'second_name','image_tagg','email']
    

@admin.register(Videopost)
class VideopostAdmin(admin.ModelAdmin):
    def preview_tag(self, obj):
        return format_html('<img src="{}" style="width: 50px; height: 50px;"/>'.format(obj.preview.url))

    preview_tag.short_description = 'изображение'

    date_hierarchy = 'published'
    list_display = ['name', 'description', 'published', 'preview_tag', 'author', 'category', 'video']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['__str__']


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['name', 'body', 'created']
    list_filter = ['video', 'created', 'body']
    search_fields = ['name', 'body']

from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Category(models.Model):
    '''категории'''
    name = models.CharField('Категория', max_length=25)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Videopost(models.Model):
    '''пост'''
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='автор')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='категория')
    name = models.CharField('Заголовок', max_length=80)
    description = models.TextField('Описание', max_length=500)
    video = models.FileField('видео', upload_to='video/items/%Y/%m/%d')
    preview = models.ImageField('превю для видео',upload_to='image/items/%Y/%m/%d',blank=True,null=True)
    published = models.DateTimeField(auto_now_add=True, verbose_name='дата создания')

    # добавим абсолютный путь чтобы после создания нас перебрасывало на страницу с постами
    def get_absolute_url(self):
        return f'/post/{self.id}'

    def __str__(self):
        return f'{self.category}, {self.name}, {self.description[:50]},  {self.published}'

    class Meta:
        verbose_name = 'пост'
        verbose_name_plural = 'посты'
        ordering = ['-published']


class Comment(models.Model):
    '''коментарии'''
    name = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='коментатор')
    video = models.ForeignKey(Videopost, on_delete=models.CASCADE, verbose_name='коментируемое видео', related_name='comments')
    body = models.TextField('коментарий', max_length=400)
    created = models.DateTimeField(auto_now_add=True, verbose_name='дата создания: ')

    def __str__(self):
        return 'комментарий {} от {}'.format(self.name, self.post)

    class Meta:
        verbose_name = 'комментарий'
        verbose_name_plural = 'комментарии'
        ordering = ['-created']

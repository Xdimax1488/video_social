from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator
from django.db.models.deletion import CASCADE


# Create your models here.
class Author(models.Model):
    '''пользыватель'''
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, verbose_name='пользыватель')
    first_name = models.CharField('имя', max_length=40)
    second_name = models.CharField('фамилия', max_length=40)
    avatar = models.ImageField('аватар', upload_to='image/items/%Y/%m/%d')
    email = models.EmailField('email')

    def __str__(self):
        return "Профиль пользователя %s" % self.user

    class Meta:
        verbose_name = 'профиль'
        verbose_name_plural = 'профили'


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
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, verbose_name='автор')
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, verbose_name='категория')
    name = models.CharField('Заголовок', max_length=80)
    description = models.TextField('Описание', max_length=500)
    video = models.FileField('видео', upload_to='video/items/%Y/%m/%d',
                             validators=[FileExtensionValidator(allowed_extensions=['mp4'])])
    preview = models.ImageField(
        'превю для видео', upload_to='image/items/%Y/%m/%d', blank=True, null=True)
    published = models.DateTimeField(
        auto_now_add=True, verbose_name='дата создания')

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
    name = models.ForeignKey(
        Author, on_delete=models.CASCADE, verbose_name='коментатор')
    video = models.ForeignKey(Videopost, on_delete=models.CASCADE,
                              verbose_name='коментируемое видео', related_name='comments')
    body = models.TextField('коментарий', max_length=400)
    created = models.DateTimeField(
        auto_now_add=True, verbose_name='дата создания: ')

    def __str__(self):
        return 'комментарий {} от {}'.format(self.name, self.post)

    class Meta:
        verbose_name = 'комментарий'
        verbose_name_plural = 'комментарии'
        ordering = ['-created']
class Room(models.Model):
    '''Комнаты чата'''
    creater =models.ForeignKey(Author,verbose_name='создатель',on_delete=models.CASCADE)
    invited = models.ManyToManyField(Author,verbose_name='учасники', related_name='invited_user')
    date = models.DateTimeField('дата создания', auto_now=True)

    class Meta:
         verbose_name = 'Комната чатов'
         verbose_name_plural = 'Комнаты чатовов'


class Chat(models.Model):
    '''Модель чата'''

    room = models.ForeignKey(Room,verbose_name='Комната чатов',on_delete=models.CASCADE)
    user = models.ForeignKey(Author,verbose_name='Учасники чата',on_delete=models.CASCADE)
    text = models.TextField('Сообщение',max_length=500)
    data = models.DateTimeField('дата создания',auto_now=True)


    class Meta:
        verbose_name = 'Комната чатов'
        verbose_name_plural = 'Комнаты чатовов'



# Generated by Django 3.1.4 on 2021-12-12 14:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('video', '0006_auto_20211128_1812'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='videopost',
            name='user',
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=40, verbose_name='имя')),
                ('second_name', models.CharField(max_length=40, verbose_name='фамилия')),
                ('avatar', models.ImageField(upload_to='image/items/%Y/%m/%d', verbose_name='аватар')),
                ('email', models.EmailField(max_length=254, verbose_name='email')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='пользыватель')),
            ],
            options={
                'verbose_name': 'профиль',
                'verbose_name_plural': 'профили',
            },
        ),
        migrations.AddField(
            model_name='videopost',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='video.author', verbose_name='автор'),
        ),
    ]

# Generated by Django 3.1.4 on 2021-12-20 20:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('video', '0010_auto_20211212_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='пользыватель'),
        ),
        migrations.AlterField(
            model_name='videopost',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='video.author', verbose_name='автор'),
        ),
    ]

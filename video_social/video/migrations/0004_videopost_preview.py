# Generated by Django 3.1.4 on 2021-11-24 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0003_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='videopost',
            name='preview',
            field=models.ImageField(blank=True, null=True, upload_to='image/items/%Y/%m/%d', verbose_name='превю для видео'),
        ),
    ]

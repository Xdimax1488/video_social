# Generated by Django 3.1.4 on 2021-12-20 22:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0013_auto_20211220_2050'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='video.author', verbose_name='коментатор'),
        ),
    ]

# Generated by Django 2.1.5 on 2019-06-08 02:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import favorite_app.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Audit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logs', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='FavoriteCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, unique=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Favorite Categories',
            },
        ),
        migrations.CreateModel(
            name='FavoriteThing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, max_length=1000, null=True, validators=[favorite_app.models.validate_length])),
                ('ranking', models.IntegerField()),
                ('metadata', models.TextField(blank=True, max_length=100, null=True)),
                ('created_date', models.DateField(auto_now_add=True)),
                ('modified_date', models.DateField(auto_now=True)),
                ('audit_log', models.ManyToManyField(editable=False, to='favorite_app.Audit')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='favorite_app.FavoriteCategory')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

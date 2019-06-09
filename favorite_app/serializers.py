from rest_framework import serializers
from datetime import datetime
from django.contrib.auth.models import User
from .models import FavoriteThing, FavoriteCategory, Audit

class FavoriteThingSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteThing
        fields = (
            'id',
            'title',
            'description',
            'ranking',
            'metadata',
            'category',
            'category_name',
            'created_date',
            'modified_date',
            'audit_log'
        )

    def create(self, validated_data):
        data = validated_data.copy()
        data['user'] = self.context['request'].user
        return super(FavoriteThingSerializer, self).create(data)

class FavoriteCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteCategory
        fields = (
            'id',
            'title',
            'user'
        )

    def create(self, validated_data):
        data = validated_data.copy()
        data['user'] = self.context['request'].user
        return super(FavoriteCategorySerializer, self).create(data)

class AuditSerializer(serializers.ModelSerializer):
    time_stamp = serializers.DateTimeField(format="%B, %d, %Y %H:%M:%S")

    class Meta:
        model = Audit
        fields = (
            'id',
            'models_objects',
            'title',
            'action_flag',
            'time_stamp'
        )

class SignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, min_length=4, max_length=20)
    password = serializers.CharField(min_length=6, max_length=20)

    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def create(self, validated_data):
        user = User(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user
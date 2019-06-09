from django.contrib import admin
from django.urls import path, include
from favorite_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('favorite_app.urls', namespace='api')),
    path('', views.home, name='home')
]

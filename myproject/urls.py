from django.contrib import admin
from django.urls import path, include
from favorite_app import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('favorite_app.urls', namespace='api')),
    path('', views.home, name='home')
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'favorite_app.views.error404'
handler500 = 'favorite_app.views.error404'
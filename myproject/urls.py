from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('favorite_app.urls', namespace='api')),
    path('', TemplateView.as_view(template_name="index.html"), name='home')
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'favorite_app.views.error404'
handler500 = 'favorite_app.views.error404'
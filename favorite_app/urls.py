from django.urls import path
from favorite_app import api
from django.contrib.auth import views as auth_views
from .forms import LoginForm
from rest_framework.authtoken.views import obtain_auth_token

from rest_framework import routers

app_name = "favorite_app"

urlpatterns = [
    path('login', obtain_auth_token, name='api_token_auth'),
    path('logout', api.Logout.as_view(), name='logout'),

]

router = routers.SimpleRouter(trailing_slash=True)
router.register(r'user-category', api.UserCategory)
router.register(r'create-user', api.Signup)
router.register(r'activities', api.AuditView)
router.register(r'', api.FavoriteThingViewSet)


urlpatterns += router.urls
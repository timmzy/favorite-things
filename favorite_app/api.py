from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User

from rest_framework.permissions import AllowAny, IsAuthenticated
from favorite_app.models import FavoriteThing, FavoriteCategory, Audit
from favorite_app.serializers import FavoriteThingSerializer, FavoriteCategorySerializer, SignupSerializer, AuditSerializer


class FavoriteThingViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    permission_classes = (IsAuthenticated,)
    queryset = FavoriteThing.objects.all()
    serializer_class = FavoriteThingSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class UserCategory(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    permission_classes = (IsAuthenticated,)
    queryset = FavoriteCategory.objects.all().order_by("id")
    serializer_class = FavoriteCategorySerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class Audit(viewsets.ReadOnlyModelViewSet):
    """
    A simple ViewSet for viewing audits only
    """
    permission_classes = (IsAuthenticated,)
    queryset = Audit.objects.all().order_by("time_stamp")
    serializer_class = AuditSerializer

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class Signup(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    http_method_names = ('post')
    queryset = User.objects.all()
    serializer_class = SignupSerializer

class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
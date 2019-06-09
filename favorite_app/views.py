from django.shortcuts import render, HttpResponse
from django.contrib.auth import authenticate, login

# Create your views here.

def home(request):
    return render(request, 'index.html', locals())
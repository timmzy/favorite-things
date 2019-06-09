from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def home(request):
    return render(request, 'index.html', locals())

def error404(request):
    return redirect("/")
from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

"""
View to redirect any 404 error to homepage
"""
def error404(request):
    return redirect("/")
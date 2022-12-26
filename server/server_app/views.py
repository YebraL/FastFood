from django.shortcuts import render
from django.http import HttpResponse
# from serpapi import GoogleSearch



# Create your views here.
def index(request):
    
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
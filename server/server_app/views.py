from django.shortcuts import render
from django.http import HttpResponse
from serpapi import GoogleSearch



# Create your views here.
def index(request):
    
    search = GoogleSearch({
    "q": "Coffee near me", 
    "location": "Austin,Texas",
    "api_key": "9a49722daa1647b5cc924febe766d67baf2a7b8f4c7b01686e094a52e977d639"
    })
    result = search.get_dict()
    print(result)
    
    index_file = open('static/index.html').read()
    return HttpResponse(index_file)
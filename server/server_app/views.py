from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from .serializer import UserSerializer
from server_app.models import User, Post
from .models import *


# Create your views here.
def index(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def signIN(request):
    username=request.data['username']
    password=request.data['password']
    print(username,password)
    user = authenticate(username=username,password=password)
    print(user, 'user')
    if user is not None:
        try:
            login(request._request,user)
            return JsonResponse({'signIN':True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIN':False})
    else:
        return JsonResponse({'signIN':False})
    
@api_view(["POST"])
def signUP(request):
    username=request.data['username']
    first_name=request.data['first_name']
    last_name=request.data['last_name']
    email=request.data['email']
    password=request.data['password']
    print(email, password)
    try:
        new_user = AppUser.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        print(new_user)
        return JsonResponse({'signup':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signup':False})

def signOUT(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})

@api_view(["POST"])
def verify(request):
    if request.method == "POST":
        # print(request.data['email'])
        # print(request.data['important'])
        # test = User.objects.all().filter(email= request.data['email'], password= request.data['important']).values()
        # print(len(test))
        try:
            test = User.objects.all().filter(email= request.data['email'], password= request.data['important']).values()
            if len(test) == 1:
                return JsonResponse({'success': True})
            return JsonResponse({'success': False})
        except:
            print('wrong email and password')
            return JsonResponse({'success': False})

@api_view(["GET"])
def currUser(request):
    if request.user.is_authenticated:
        user = request.data
        data = UserSerializer(user, many=False)
        print(data.data)
        return Response(data.data)
    else:
        return JsonResponse({"user":None})
    

@api_view(["POST"])
def register(request):
    
    if request.method == "POST":
        firstName = request.data['fName']
        lastName = request.data['lName']
        email = request.data['eMail']
        password = request.data['pass1']
        # print(fName, lName, eMail, pass1)
        addMember = User.objects.create_user(firstName = firstName, lastName = lastName, email= email, password= password)
        addMember.save()
        print('save New member')
        return JsonResponse({'success':True})
    
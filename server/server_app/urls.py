from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('post/', views.verify),
    path('signIn/', views.signIN),
    path('signUp/', views.signUP),
    path('signOut/', views.signOUT),
    path('currentUser/', views.currUser)
]
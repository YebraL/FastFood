from django.db import models
from django.contrib.auth.models import (AbstractUser)

from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class AppUser(AbstractUser):
    """
    user account
    """
    username = models.CharField(
        max_length=150,
        unique=True,
    )
    email = models.EmailField(
        max_length=150,
        unique=True,
    )
    is_active= models.BooleanField(
        default=True,
        help_text='''
            Designates whether this user should be treated as active. 
            Unselect this instead of deleting accounts.', verbose_name='active'
        '''
    )
    REQUIRED_FIELDS=[]

class User(models.Model):
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    
    def __str__(self):
        return f'{self.firstName, self.lastName, self.email, self.password}'
    
class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title, self.content, self.category}'



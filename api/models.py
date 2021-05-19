from django.db import models

# Create your models here.
class Contact(models.Model):
  name = models.CharField(max_length=100, unique=True, null=False, default=False)
  number = models.CharField(max_length=11, unique=True, null=False, default=False)
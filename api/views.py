from django.shortcuts import render
from rest_framework import generics, status, viewsets
# from .serializers import ContactSerializer, CreateContactSerializer
from .serializers import ContactSerializer
from .models import Contact
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
# class ContactView(generics.ListAPIView):
#   queryset = Contact.objects.all()
#   serializer_class = ContactSerializer

# class CreateContact(APIView):
#   serializer_class = CreateContactSerializer
#   def post(self, request, format=None):
#     pass

# 
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('name')
    serializer_class = ContactSerializer
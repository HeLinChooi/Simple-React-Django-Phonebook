from rest_framework import serializers
from .models import Contact

# class ContactSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Contact
#     fields = ('id', 'name', 'number')

# class CreateContactSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Contact
#     fields = ('name', 'number')

class ContactSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Contact
    fields = ('name', 'number')
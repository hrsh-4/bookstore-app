from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from .models import BookDetails
from .serializers import BookSerializer
from rest_framework import generics


# @api_view(['GET', 'POST', 'DELETE'])
class BookList(generics.ListCreateAPIView):
    queryset = BookDetails.objects.all()
    serializer_class = BookSerializer

# @api_view(['GET', 'PUT', 'DELETE'])
class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BookDetails.objects.all()
    serializer_class = BookSerializer
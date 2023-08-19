from django.shortcuts import render
from django.forms import model_to_dict

from .models import Task

from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import Task_Serializer

#get
class Tasks_List(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer
    
#post
class Tasks_Create(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer
    
#put
class Tasks_Update(UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer
    
#delete
class Tasks_Delete(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer

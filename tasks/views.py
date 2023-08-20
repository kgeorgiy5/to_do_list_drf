from django.shortcuts import render
from django.forms import model_to_dict

from .models import Task

from rest_framework.viewsets import ModelViewSet

from .serializers import Task_Serializer

class Task_View_Set(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer
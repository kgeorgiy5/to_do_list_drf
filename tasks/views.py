from django.shortcuts import render

from .models import Tasks

from rest_framework.generics import ListAPIView

class Tasks_List(ListAPIView):
    model = Tasks
    fields = ['title']

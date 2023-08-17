from django.shortcuts import render
from django.forms import model_to_dict

from .models import Task

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import Task_Serializer

class Tasks_List(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        return Response({'tasks':Task_Serializer(tasks, many=True).data})
    
    def post(self, request):
        post_new_task = Task.objects.create(
            title=request.data['title'],
            description=request.data['description'],
        )
        return Response({'post': Task_Serializer(post_new_task).data})

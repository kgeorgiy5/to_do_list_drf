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
    
class Tasks_Complete(APIView):
    def patch(self, request, pk):
        if not pk:
            return Response({'Error':'Method PATCH is not allowed'})
        try:
            model = Task.objects.get(pk=pk)
        except:
            return Response({'Error': 'Object does not exists'})
        
        data = {'is_completed': True}
        serializer = Task_Serializer(model, data=data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response({'Error':'Http 400 bad request'})
            
    
#delete
class Tasks_Delete(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = Task_Serializer

from django.shortcuts import render
from django.forms import model_to_dict

from .models import Task

from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response

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

# class Tasks_List(APIView):
#     def get(self, request):
#         tasks = Task.objects.all()
#         return Response({'tasks':Task_Serializer(tasks, many=True).data})
    
#     def post(self, request):
#         #exceptions
#         serializer = Task_Serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
        
#         return Response({'post': serializer.data})

#     def put(self, request, *args, **kwargs):
#         pk = kwargs.get('pk', None)
#         if not pk:
#             return Response({'error':'PUT not allowed'})
#         try:
#             instance = Task.objects.get(pk=pk)
#         except:
#             return Response({'error':'object not found'})
        
#         serializer = Task_Serializer(data=request.data, instance=instance)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
        
#         return Response({'post':serializer.data}) 
    
#     def delete(self, request, *args, **kwargs):
#         pk = kwargs.get('pk', None)
#         if not pk:
#             return Response({'error':'DELETE not allowed'})
#         try:
#             instance = Task.objects.get(pk=pk)
#         except:
#             return Response({'Error':'task not found'})
        
#         instance.delete()
        
        
#         return Response({'post':'delete item' + str(pk)})
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from .models import Task

class Task_Serializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    description = serializers.CharField()
    is_completed = serializers.BooleanField(default=False)
    created = serializers.DateTimeField()
    
# def encode():
#     model = TaskModel('test3', '333333333', True, 10)
#     model_sr = TaskSerializer(model)
#     print(model_sr.data, type(model_sr.data), sep='\n')
#     json = JSONRenderer().render(model_sr.data)
#     print(json)
    
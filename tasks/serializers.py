from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from .models import Task

class Task_Serializer(serializers.ModelSerializer):
    
    def update(self, instance, validated_data):
        
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.is_completed = validated_data.get('is_completed', instance.is_completed)
        instance.time_created = instance.time_created
        
        return instance
    
    
    class Meta:
        model = Task
        fields = [
            'id',
            'title',
            'description',
            'is_completed',
            'time_created'
        ]
    
# def encode():
#     model = TaskModel('test3', '333333333', True, 10)
#     model_sr = TaskSerializer(model)
#     print(model_sr.data, type(model_sr.data), sep='\n')
#     json = JSONRenderer().render(model_sr.data)
#     print(json)
    
from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from .models import Task

class Task_Serializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    description = serializers.CharField()
    is_completed = serializers.BooleanField(default=False)
    time_created = serializers.DateTimeField(read_only=True)
    
    def create(self, validated_data):
        return Task.objects.create(**validated_data) # <- create new instance using kwargs
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title) # <- instance - updated model, validated_date good data post 
        instance.description = validated_data.get('description', instance.description)
        instance.is_completed = validated_data.get('is_completed', instance.is_completed)
        instance.save()
        return instance
    
    
    # class Meta:
    #     model = Task
    #     fields = [
    #         'title',
    #         # 'description',
    #         'is_completed',
    #         'time_created'
    #     ]
    
# def encode():
#     model = TaskModel('test3', '333333333', True, 10)
#     model_sr = TaskSerializer(model)
#     print(model_sr.data, type(model_sr.data), sep='\n')
#     json = JSONRenderer().render(model_sr.data)
#     print(json)
    
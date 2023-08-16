from django.db import models
from django.contrib.auth.models import User

class Tasks(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(blank=True, null= True)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    
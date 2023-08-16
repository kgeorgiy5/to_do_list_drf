from django.urls import path

from .views import Tasks_List

urlpatterns = [
    path('', Tasks_List.as_view(), name='tasks')
]

from django.urls import path

from .views import Tasks_List, Tasks_Create, Tasks_Update, Tasks_Delete, Tasks_Complete

urlpatterns = [
    #get
    path('api/tasks-get/', Tasks_List.as_view(), name='tasks'),
    #put
    path('api/tasks-update/<int:pk>/', Tasks_Update.as_view(), name='tasks-update'),
    #post
    path('api/tasks-create/', Tasks_Create.as_view(), name='tasks-create'),
    #delete
    path('api/tasks-delete/<int:pk>/', Tasks_Delete.as_view(), name='tasks-delete'),
    #patch
    path('api/tasks-complete/<int:pk>/', Tasks_Complete.as_view(), name='tasks-complete')
]

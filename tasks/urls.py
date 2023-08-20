from django.urls import path

from .views import Task_View_Set

urlpatterns = [
    #get list
    path('api/tasks-get/', Task_View_Set.as_view({'get': 'list'}), name='tasks'),
    #put update
    path('api/tasks-update/<int:pk>/', Task_View_Set.as_view({'put': 'update'}), name='tasks-update'),
    #post create
    path('api/tasks-create/', Task_View_Set.as_view({'post': 'create'}), name='tasks-create'),
    #delete destroy
    path('api/tasks-delete/<int:pk>/', Task_View_Set.as_view({'delete':'destroy'}), name='tasks-delete'),
]

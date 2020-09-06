from django.urls import path
from helloworld_app.views import index, indexAPI

urlpatterns = [
    path('', index, name="template_res"),
    path('api/', indexAPI, name="api_res"),
]
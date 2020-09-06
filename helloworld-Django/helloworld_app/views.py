from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

def index(request):
    return render(request, 'helloworld_app/index.html')

@api_view(('GET', ))
def indexAPI(request):
    if request.method == 'GET':
        return Response(status=status.HTTP_200_OK, data={"data": "Hello World from Django !"})

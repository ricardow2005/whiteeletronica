from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status, generics

from .serializers import ClienteSerializer
from .models import Cliente

# Create your views here.
def index(request):
    #return HttpResponse('Teste ')
    return render(request, 'index.html')

class ClienteView(generics.ListAPIView):

    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
  
    def get(self, request, format=None):   
        try:
            cliente    = Cliente.objects.all()
            serializer = ClienteSerializer(cliente, many=True)
            return Response(serializer.data)    
        except:
            errorMessage = "Erro não for encontrado"
            return Response(errorMessage)     

class ClienteDelete(generics.DestroyAPIView):
    
    def delete(self, request, format=None):
        cliente = get_object_or_404(Cliente, id=request.data.get('id'))
        cliente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ClienteCreate(generics.CreateAPIView):
    
    def post(self, request, format=None):
        serializer = ClienteSerializer(data=request.data)
        
        if serializer.is_valid():
            #user = get_object_or_404(User, id=request.data.get('user'))
            
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClienteUpdate(generics.ListCreateAPIView):

    def put(self, request, pk, format=None):
        cliente = get_object_or_404(Cliente, id=pk)
        #cliente.status = request.data.get('status')
        serializer = ClienteSerializer(cliente, data=request.data)

        if serializer.is_valid():   
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        
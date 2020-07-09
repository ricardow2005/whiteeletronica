from django.db import models

# Create your models here.
from django.utils import timezone

class Cliente(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=200)
    cpf = models.CharField(max_length=11, default=0)
    endereco = models.CharField(max_length=300)
    cidade = models.CharField(max_length=100)
    bairro = models.CharField(max_length=140)
    telefone1 = models.CharField(max_length=11, blank=True)
    telefone2 = models.CharField(max_length=11, blank=True)
    email = models.CharField(max_length=200, blank=True)

class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    id_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    name = models.CharField(max_length=400, blank=True)
    marca = models.CharField(max_length=40, blank=True)
    modelo = models.CharField(max_length=40, blank=True)
 
class Problema(models.Model):
    id = models.AutoField(primary_key=True)
    id_produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    descricao = models.CharField(max_length=400)
    data_entrega = models.DateField()
    data_conserto = models.DateField(blank=True)
    resolucao = models.CharField(max_length=400, blank=True)

 

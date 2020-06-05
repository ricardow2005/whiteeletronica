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
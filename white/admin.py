from django.contrib import admin

# Register your models here.

from .models import Cliente, Problema, Produto

admin.site.register(Cliente)
admin.site.register(Problema)
admin.site.register(Produto)
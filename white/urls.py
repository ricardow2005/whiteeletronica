from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cliente/', views.ClienteView.as_view()),
    path('clientedelete/', views.ClienteDelete.as_view()),
    path('clientecreate/', views.ClienteCreate.as_view()),
    path('clienteupdate/<int:pk>/', views.ClienteUpdate.as_view()),    
    path('problema/', views.ProblemaView.as_view()),
    path('problemaproduto/<int:pk>/', views.ProblemaProdutoView.as_view()),    
    path('produto/', views.ProdutoView.as_view()),
]
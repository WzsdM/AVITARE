from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('inicio/', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('', views.login, name="login"),
    path('proyectos/', views.proyectos, name="proyectos"),
    path('unidades/', views.unidades, name="unidades"),
    path('proyectos/crearProyectos/', views.crearProyecto, name="crearPro"),
    path('leads/', views.leads, name="leads"),
    path('leads/createleads/', views.createleads, name="createleads"),
]

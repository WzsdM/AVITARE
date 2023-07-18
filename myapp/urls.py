from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('proyectos/', views.proyectos, name="proyectos"),
    path('unidades/', views.unidades, name="unidades"),
    path('proyectos/crearProyectos/', views.crearProyecto, name="crearPro"),
]

from django.shortcuts import render

def index(request):
    return render(request,'index.html')
def proyectos(request):
    return render(request,'proyectos.html')
def crearProyecto(request):
    return render(request,'crearproyecto.html')
def unidades(request):
    return render(request,'unidades.html')

# Create your views here.

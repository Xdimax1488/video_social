from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})

def category_deteil(request,id):
    return render(request, 'index.html', {})

def video_deteil(request,id):
    return render(request, 'index.html', {})

def author (request,id):
    return render(request,'index.html', {})

def create(request):
    return render(request, 'index.html', {})




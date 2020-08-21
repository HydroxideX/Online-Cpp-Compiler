from django.urls import path
from . import views

urlpatterns = [
    path('code/', views.code, name="code"),
    path('output/', views.output, name="output"),
    path('input/', views.input, name="input"),
]

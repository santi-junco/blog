from django.urls import path
from .views import ListCategoriewView

urlpatterns = [
    path('', ListCategoriewView.as_view()),
]
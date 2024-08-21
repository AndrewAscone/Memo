from django.shortcuts import render
from .models import Memo
from rest_framework import viewsets
from .serializers import MemoSerializer

# Create your views here.

class MemoViewset(viewsets.ModelViewSet):
    serializer_class=MemoSerializer
    queryset=Memo.objects.all()
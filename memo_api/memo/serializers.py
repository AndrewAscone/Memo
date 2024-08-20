from .models import Memo
from rest_framework import serializers

class MemoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Memo
        fields='__all__'
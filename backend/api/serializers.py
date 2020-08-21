from rest_framework import serializers
from .models import Code, Input, Output

class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Code
        fields = '__all__'


class InputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Input
        fields = '__all__'



class OutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Output
        fields = '__all__'

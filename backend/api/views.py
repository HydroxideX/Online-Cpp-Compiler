from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CodeSerializer, InputSerializer, OutputSerializer
from .models import Code, Input
from random import randrange
import subprocess
from subprocess import PIPE
from subprocess import Popen
import os
from Timeout import timeout



@api_view(['POST'])
def code(request):
    serializer = CodeSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    handle1=open(os.path.dirname(os.path.abspath(__file__)) +"/code_files/code.cpp","w")
    handle1.write(request.data["content"])
    handle1.close()
    return Response(serializer.data)


@api_view(['POST'])
def input(request):
    serializer = InputSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    handle1=open(os.path.dirname(os.path.abspath(__file__)) +"/input_files/input.txt","w")
    handle1.write(request.data["content"])
    handle1.close()
    return Response(serializer.data)


@api_view(['GET'])
@timeout(10)
def output(request):
    name = os.path.dirname(os.path.abspath(__file__)) +"/object-files/a"+str(randrange(1000)) + ".out"
    try:
        subprocess.check_output(["g++", os.path.dirname(os.path.abspath(__file__)) + "/code_files/code.cpp", "-o", name], stderr=PIPE)
    except subprocess.CalledProcessError as err:
        return Response(err.stderr)
    except:
        return Response("Unknown Signal 11")
    proc = Popen(name, stdin=PIPE, stdout=PIPE, stderr=PIPE)
    with open(os.path.dirname(os.path.abspath(__file__)) +"/input_files/input.txt", 'rb') as input_file:
        a = b''
        for i in input_file:
            a += i
        out, err = proc.communicate(input=a)
        handle1 = open(os.path.dirname(os.path.abspath(__file__)) + "/input_files/input.txt", 'w+')
        handle1.write('')
        handle1.close()
        return Response(out.decode('ascii'))

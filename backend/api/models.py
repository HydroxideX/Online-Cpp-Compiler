from django.db import models

# Create your models here.

class Code(models.Model):
    content = models.CharField(max_length=5000)
    def __str__(self):
        return self.title

class Input(models.Model):
    content = models.CharField(max_length=5000)
    def __str__(self):
        return self.title


class Output(models.Model):
    content = models.CharField(max_length=5000)
    def __str__(self):
        return self.title

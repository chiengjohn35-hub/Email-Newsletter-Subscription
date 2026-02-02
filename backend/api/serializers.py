from rest_framework import serializers
from .models import Newsletter

class TokenNewsletterSubscribe(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ['email']

        email = serializers.EmailField(allow_null=False)



from django.shortcuts import render
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.views.decorators.csrf import  csrf_exempt
from django.utils.decorators import method_decorator
from .serializers import TokenNewsletterSubscribe

# Create your views here.

@method_decorator(csrf_exempt, name="dispatch")
class SubscribeToNewsletter(APIView):
    def post(self, request, *args, **kwargs):
        serializer = TokenNewsletterSubscribe(data=request.data)
        print("Incoming data:", request.data)


        if serializer.is_valid():
            try:
                serializer.save()

                send_mail(
                    "Welcome to ChiengTech group",
                    "thank for subscribing to our website",
                    settings.DEFAULT_FROM_EMAIL,
                    [serializer.validated_data['email']],
                    fail_silently=False
                )

                return Response(
                    {"success": True, "message": "Thank You for Subscribing to our Website!"},
                    status=200
                )

            except Exception as e:
                return Response(
                    {"success": False, "message": str(e)},
                    status=400
                )

        return Response(
            {"success": False, "message": serializer.errors},
            status=400
        )




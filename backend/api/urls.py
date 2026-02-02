from django.urls import path
from .views import SubscribeToNewsletter

urlpatterns = [
    path("subscribe/", SubscribeToNewsletter.as_view(), name='subscribe-email')
]


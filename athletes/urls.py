from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"athletes", views.AthleteViewSet, basename="athlete")

urlpatterns = [
    path("", include(router.urls)),
]

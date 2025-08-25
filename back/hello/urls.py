from django.urls import include, path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("api/", include("athletes.urls")),
    path("api-auth/", include("rest_framework.urls")),  # browsable API
]

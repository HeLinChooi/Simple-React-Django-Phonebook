# from django.urls import include, path
# from .views import ContactView
# from rest_framework import routers

# urlpatterns = [
#     path('home', ContactView.as_view())
# ]
# https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c

from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'contacts', views.ContactViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
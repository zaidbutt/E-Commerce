from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.urls import include, path
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r"User", views.UserViewSet)
router.register(r"Comment", views.CommentViewSet)
router.register(r'Listing', views.ListingViewSet)
router.register(r'Bid', views.BidViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    #path('api-auth', include('rest_framework.urls', namespace='rest_framework')),

    #path("", views.index, name="index"),
    #path("login", views.login_view, name="login"),
    #path("logout", views.logout_view, name="logout"),
    #path("register", views.register, name="register"),
    #path("listing", views.create_listing, name= "listing"),
    #path("product/<int:product_id>/<int:user_id>", views.product, name="product"),
    #path("CloseBid/<int:product_id>", views.product, name = "CloseBid")
]



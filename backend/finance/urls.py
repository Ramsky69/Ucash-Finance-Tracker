# finance/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
from .views import UserBudgetView, RegisterView, ProfileView

router = DefaultRouter()
router.register(r'profile', views.ProfileViewSet, basename='profile')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('transactions/', views.TransactionListCreateView.as_view()),
    path('transactions/<int:pk>/', views.TransactionRetrieveUpdateDestroyView.as_view()),
    path('budgets/', views.BudgetListCreateView.as_view()),
    path('budgets/<int:pk>/', views.BudgetRetrieveUpdateDestroyView.as_view()),
    path('user-budget/', UserBudgetView.as_view(), name='user-budget'),
    path('', include(router.urls)),
]
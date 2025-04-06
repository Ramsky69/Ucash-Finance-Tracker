# finance/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  # Import JWT viewspyth
from . import views
from .views import UserBudgetView

router = DefaultRouter()
router.register(r'profile', views.ProfileViewSet, basename='profile')

urlpatterns = [
    path('api/register/', views.RegisterView.as_view()),
    path('api/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/transactions/', views.TransactionListCreateView.as_view()),
    path('api/transactions/<int:pk>/', views.TransactionRetrieveUpdateDestroyView.as_view()),
    path('api/budgets/', views.BudgetListCreateView.as_view()),
    path('api/budgets/<int:pk>/', views.BudgetRetrieveUpdateDestroyView.as_view()),
    path('', include(router.urls)),
]

urlpatterns += [
    path('api/user-budget/', UserBudgetView.as_view(), name='user-budget'),
]
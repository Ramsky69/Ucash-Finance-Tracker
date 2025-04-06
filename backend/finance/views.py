# finance/views.py
from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, TransactionSerializer, BudgetSerializer, ProfileSerializer  # Add ProfileSerializer
from .models import Transaction, Budget, Profile  # Add Profile model import
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

# Register View
class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        username = serializer.validated_data['username']
        email = serializer.validated_data['email']
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    

# finance/views.py
class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = []

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def get_object(self):
        return self.request.user.profile

    def perform_update(self, serializer):
        serializer.save()

# Transactions Views
class TransactionListCreateView(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]  # Enforce authentication

    def get_queryset(self):
        # Filter transactions by the authenticated user
        return Transaction.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Assign the authenticated user to the transaction
        serializer.save(user=self.request.user)

class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

# Budgets Views
class BudgetListCreateView(generics.ListCreateAPIView):
    serializer_class = BudgetSerializer
    permission_classes = [IsAuthenticated]  # Enforce authentication

    def get_queryset(self):
        # Filter budgets by the authenticated user
        return Budget.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Assign the authenticated user to the budget
        serializer.save(user=self.request.user)

class BudgetRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer

# Add a view to handle budget retrieval and updates
class UserBudgetView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Fetch the user's budget
        budget = Budget.objects.filter(user=request.user).first()
        if budget:
            return Response({'budget': budget.limit}, status=status.HTTP_200_OK)
        return Response({'budget': 0}, status=status.HTTP_200_OK)

    def post(self, request):
        # Update or create the user's budget
        budget_limit = request.data.get('budget', 0)
        budget, created = Budget.objects.update_or_create(
            user=request.user,
            defaults={'limit': budget_limit}
        )
        return Response({'budget': budget.limit}, status=status.HTTP_200_OK)


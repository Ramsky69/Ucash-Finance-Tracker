# finance/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Transaction, Budget, Profile
from datetime import datetime

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
        read_only_fields = ['user']  # Make 'user' read-only

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['amount'] = float(instance.amount)  # Ensure amount is a number
        return representation

    def validate_date(self, value):
        # Accepts date as string in various formats and converts to date object
        if isinstance(value, str):
            for fmt in ("%Y-%m-%d", "%m/%d/%Y", "%d/%m/%Y"):
                try:
                    return datetime.strptime(value, fmt).date()
                except ValueError:
                    continue
            raise serializers.ValidationError("Date must be in YYYY-MM-DD, MM/DD/YYYY, or DD/MM/YYYY format.")
        return value

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
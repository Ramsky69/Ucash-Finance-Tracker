import { createContext, useContext, useState } from 'react';
import api from '../services/api';

// Define the shape of the authentication response
interface AuthResponse {
  access: string;
  refresh: string;
}

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token') || null);

  const login = async (username: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>('/token/', { username, password });
      setToken(response.data.access);
      localStorage.setItem('token', response.data.access);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      await api.post('/register/', { username, email, password });
      // Optionally, you can log in the user automatically after registration
      // await login(username, password);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message)
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
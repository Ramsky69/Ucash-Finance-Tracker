// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Proxy configured in vite.config.ts
});

// Add a request interceptor to include the authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    };
  }
  return config;
});

// Add a response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login page if token is invalid
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex">
        {/* Left Section */}
        <div className="w-1/2 bg-black text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-blue-500">UC</span>ASH
          </h1>
          <p className="text-sm mb-6">Track your Finance = Better Life</p>
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
          <p className="text-center text-sm mb-6">
            Please sign in to access your account and continue tracking your finances.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-500 underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">OR</p>
            <p className="text-sm mt-2">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-500 underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
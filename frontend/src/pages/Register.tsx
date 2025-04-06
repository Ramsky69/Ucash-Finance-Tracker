import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(username, email, password);
    navigate('/login');
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
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <p className="text-center text-sm mb-6">
            Join as our beloved users who trust UCASH for their financial tracking.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Register</h1>
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
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            By registering, you agree to the{' '}
            <Link to="/terms" className="text-blue-500 underline">
              Terms, Conditions and Policies
            </Link>{' '}
            of UCASH & Privacy Policy
          </p>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">OR</p>
            <p className="text-sm mt-2">
              Have an account?{' '}
              <Link to="/login" className="text-blue-500 underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
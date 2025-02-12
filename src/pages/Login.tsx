import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    const mockUser = {
      user_id: 'user_12345',
      role: 'student' as const,
      email: email,
      name: 'John Doe',
      profile_pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80',
      created_at: new Date().toISOString(),
      last_login: new Date().toISOString(),
    };
    setUser(mockUser);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-dark-200 rounded-lg shadow-xl p-8 border border-dark-100">
          <div className="flex justify-center mb-8">
            <LogIn className="w-12 h-12 text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Welcome to QuizMaster</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6">
            <button
              onClick={() => {/* TODO: Implement Google login */}}
              className="w-full flex items-center justify-center gap-2 bg-dark-300 hover:bg-dark-100 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 border border-dark-100"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
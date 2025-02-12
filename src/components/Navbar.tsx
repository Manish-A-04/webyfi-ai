import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, BarChart2, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const location = useLocation();
  const { user } = useAuthStore();

  const navItems = [
    { path: '/quizzes', icon: BookOpen, label: 'Quizzes' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/analytics', icon: BarChart2, label: 'Analytics' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-dark-200 border-t border-dark-100 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <item.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400" />
                  <span className="text-xs mt-1 text-gray-400 group-hover:text-primary-400">
                    {item.label}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
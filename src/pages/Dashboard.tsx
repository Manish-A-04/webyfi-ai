import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { Award, Clock, Calendar, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    { icon: BookOpen, label: 'Quizzes Taken', value: '12' },
    { icon: Award, label: 'Average Score', value: '85%' },
    { icon: Clock, label: 'Time Spent', value: '6h 30m' },
    { icon: Calendar, label: 'Upcoming', value: '3' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-8"
      >
        <div className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={user?.profile_pic}
              alt={user?.name}
              className="w-16 h-16 rounded-full border-2 border-primary-400"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
              <p className="text-gray-400">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-dark-300 rounded-lg p-4 border border-dark-100">
                <Icon className="w-8 h-8 text-primary-400 mb-2" />
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100"
          >
            <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {['Quiz Master', 'Speed Demon', 'Perfect Score'].map((achievement) => (
                <div key={achievement} className="flex items-center gap-3 p-3 bg-dark-300 rounded-lg">
                  <Award className="w-8 h-8 text-primary-400" />
                  <div>
                    <p className="font-semibold">{achievement}</p>
                    <p className="text-sm text-gray-400">Earned 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100"
          >
            <h2 className="text-xl font-bold mb-4">Upcoming Quizzes</h2>
            <div className="space-y-4">
              {[
                { title: 'Mathematics', date: 'Tomorrow, 10:00 AM' },
                { title: 'Science', date: 'Feb 20, 2:30 PM' },
                { title: 'History', date: 'Feb 22, 11:00 AM' },
              ].map((quiz) => (
                <div key={quiz.title} className="flex items-center gap-3 p-3 bg-dark-300 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary-400" />
                  <div>
                    <p className="font-semibold">{quiz.title}</p>
                    <p className="text-sm text-gray-400">{quiz.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
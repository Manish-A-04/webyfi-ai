import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

const Analytics = () => {
  const performanceData = [
    { name: 'Math', score: 85, average: 75 },
    { name: 'Science', score: 92, average: 78 },
    { name: 'History', score: 78, average: 72 },
    { name: 'English', score: 88, average: 76 },
    { name: 'Geography', score: 95, average: 80 },
  ];

  const timeData = [
    { date: 'Mon', time: 45 },
    { date: 'Tue', time: 55 },
    { date: 'Wed', time: 40 },
    { date: 'Thu', time: 60 },
    { date: 'Fri', time: 50 },
    { date: 'Sat', time: 65 },
    { date: 'Sun', time: 45 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
            <h3 className="text-lg font-semibold">Average Score</h3>
            <p className="text-2xl font-bold text-green-400">87.6%</p>
            <p className="text-sm text-gray-400">+5.2% from last month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-lg font-semibold">Quizzes Taken</h3>
            <p className="text-2xl font-bold text-blue-400">24</p>
            <p className="text-sm text-gray-400">This month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Clock className="w-8 h-8 text-purple-400 mb-2" />
            <h3 className="text-lg font-semibold">Time Spent</h3>
            <p className="text-2xl font-bold text-purple-400">12.5h</p>
            <p className="text-sm text-gray-400">This week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Target className="w-8 h-8 text-red-400 mb-2" />
            <h3 className="text-lg font-semibold">Accuracy</h3>
            <p className="text-2xl font-bold text-red-400">92%</p>
            <p className="text-sm text-gray-400">Last 100 questions</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <h2 className="text-xl font-bold mb-6">Performance by Subject</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                    }}
                  />
                  <Bar dataKey="score" fill="#3B82F6" name="Your Score" />
                  <Bar dataKey="average" fill="#6B7280" name="Class Average" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <h2 className="text-xl font-bold mb-6">Study Time This Week</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="time"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.2}
                    name="Minutes"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;
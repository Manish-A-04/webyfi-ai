import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Clock, Star } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "Alice Johnson", score: 980, time: "25:30", quizzes: 15 },
    { rank: 2, name: "Bob Smith", score: 945, time: "27:15", quizzes: 12 },
    { rank: 3, name: "Carol White", score: 920, time: "26:45", quizzes: 14 },
    { rank: 4, name: "David Brown", score: 890, time: "28:20", quizzes: 11 },
    { rank: 5, name: "Eve Wilson", score: 870, time: "29:10", quizzes: 13 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Trophy className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="text-lg font-semibold">Top Score</h3>
            <p className="text-2xl font-bold text-yellow-400">980</p>
            <p className="text-sm text-gray-400">Alice Johnson</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Clock className="w-8 h-8 text-primary-400 mb-2" />
            <h3 className="text-lg font-semibold">Fastest Time</h3>
            <p className="text-2xl font-bold text-primary-400">25:30</p>
            <p className="text-sm text-gray-400">Alice Johnson</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 rounded-lg p-6 border border-dark-100"
          >
            <Star className="w-8 h-8 text-purple-400 mb-2" />
            <h3 className="text-lg font-semibold">Most Quizzes</h3>
            <p className="text-2xl font-bold text-purple-400">15</p>
            <p className="text-sm text-gray-400">Alice Johnson</p>
          </motion.div>
        </div>

        <div className="bg-dark-200 rounded-lg border border-dark-100">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Global Rankings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-dark-100">
                    <th className="pb-4 font-semibold">Rank</th>
                    <th className="pb-4 font-semibold">Name</th>
                    <th className="pb-4 font-semibold text-right">Score</th>
                    <th className="pb-4 font-semibold text-right">Time</th>
                    <th className="pb-4 font-semibold text-right">Quizzes</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry, index) => (
                    <motion.tr
                      key={entry.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-dark-100 last:border-0"
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          {entry.rank <= 3 && (
                            <Medal className={`w-5 h-5 ${
                              entry.rank === 1 ? 'text-yellow-400' :
                              entry.rank === 2 ? 'text-gray-400' :
                              'text-amber-700'
                            }`} />
                          )}
                          <span className={entry.rank <= 3 ? 'font-semibold' : ''}>
                            #{entry.rank}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">{entry.name}</td>
                      <td className="py-4 text-right font-mono">{entry.score}</td>
                      <td className="py-4 text-right font-mono">{entry.time}</td>
                      <td className="py-4 text-right font-mono">{entry.quizzes}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
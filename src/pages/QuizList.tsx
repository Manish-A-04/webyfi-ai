import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen } from 'lucide-react';

const QuizList = () => {
  const quizzes = [
    {
      id: '1',
      title: 'Mathematics Fundamentals',
      description: 'Test your basic math skills',
      category: 'Mathematics',
      difficulty: 'Medium',
      timeLimit: 30,
      participants: 25,
    },
    {
      id: '2',
      title: 'Science Quiz',
      description: 'General science knowledge test',
      category: 'Science',
      difficulty: 'Hard',
      timeLimit: 45,
      participants: 30,
    },
    {
      id: '3',
      title: 'History Trivia',
      description: 'World history questions',
      category: 'History',
      difficulty: 'Easy',
      timeLimit: 20,
      participants: 15,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Available Quizzes</h1>
          <div className="flex gap-4">
            <select className="bg-dark-300 text-white rounded-md px-3 py-2 border border-dark-100">
              <option>All Categories</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>History</option>
            </select>
            <select className="bg-dark-300 text-white rounded-md px-3 py-2 border border-dark-100">
              <option>All Difficulties</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-200 rounded-lg p-6 border border-dark-100 hover:border-primary-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{quiz.title}</h3>
                  <p className="text-gray-400 text-sm">{quiz.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium
                  ${quiz.difficulty === 'Easy' ? 'bg-green-900 text-green-200' :
                    quiz.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-200' :
                    'bg-red-900 text-red-200'}`}>
                  {quiz.difficulty}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{quiz.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{quiz.timeLimit} minutes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{quiz.participants} participants</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
                Start Quiz
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizList;
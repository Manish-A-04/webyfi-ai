import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle } from 'lucide-react';

const QuizTake = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  const mockQuiz = {
    title: "Mathematics Fundamentals",
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        text: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        explanation: "π is approximately equal to 3.14159..."
      }
    ]
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{mockQuiz.title}</h1>
            <div className="flex items-center gap-2 text-primary-400">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="w-full bg-dark-300 rounded-full h-2">
              <div
                className="bg-primary-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / mockQuiz.totalQuestions) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>Question {currentQuestion + 1} of {mockQuiz.totalQuestions}</span>
              <span>{Math.round(((currentQuestion + 1) / mockQuiz.totalQuestions) * 100)}% Complete</span>
            </div>
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="bg-dark-300 rounded-lg p-6 border border-dark-100">
              <h2 className="text-xl font-semibold mb-4">{mockQuiz.questions[0].text}</h2>
              <div className="space-y-3">
                {mockQuiz.questions[0].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 rounded-lg bg-dark-200 hover:bg-dark-100 transition-colors border border-dark-100 hover:border-primary-400"
                  >
                    <span className="inline-block w-6 h-6 text-sm rounded-full bg-dark-300 text-center leading-6 mr-3">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="px-6 py-2 rounded-md bg-dark-300 text-gray-400 hover:bg-dark-100 transition-colors"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button className="px-6 py-2 rounded-md bg-primary-500 hover:bg-primary-600 text-white transition-colors">
                Next
              </button>
            </div>
          </motion.div>

          <div className="mt-6 p-4 bg-dark-300 rounded-lg border border-dark-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary-400 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Important Notes:</h3>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  <li>You cannot return to previous questions once submitted</li>
                  <li>Each question has only one correct answer</li>
                  <li>The quiz will auto-submit when the timer reaches zero</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizTake;
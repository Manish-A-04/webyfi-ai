import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Save } from 'lucide-react';

const QuizCreate = () => {
  const [questions, setQuestions] = React.useState([{ text: '', options: ['', '', '', ''], correct: 0 }]);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', '', '', ''], correct: 0 }]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-2xl font-bold">Create New Quiz</h1>

        <div className="bg-dark-200 rounded-lg p-6 border border-dark-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Quiz Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                placeholder="Enter quiz title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                placeholder="Enter quiz description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white">
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>History</option>
                  <option>Literature</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                <select className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-dark-200 rounded-lg p-6 border border-dark-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Question {index + 1}</h3>
                <button
                  onClick={() => removeQuestion(index)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Minus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                  placeholder="Enter question text"
                />

                <div className="space-y-2">
                  {question.options.map((_, optionIndex) => (
                    <div key={optionIndex} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`correct-${index}`}
                        className="w-4 h-4 text-primary-400 bg-dark-300 border-dark-100 focus:ring-primary-400"
                      />
                      <input
                        type="text"
                        className="flex-1 px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-transparent text-white"
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <button
            onClick={addQuestion}
            className="w-full py-3 border-2 border-dashed border-dark-100 rounded-lg text-gray-400 hover:text-primary-400 hover:border-primary-400 transition-colors"
          >
            <Plus className="w-6 h-6 mx-auto" />
          </button>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
            <Save className="w-5 h-5" />
            Save Quiz
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizCreate;
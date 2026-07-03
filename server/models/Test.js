const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number,
  explanation: String,
}, { _id: false });

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    default: 30, // in minutes
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  questions: [questionSchema],
  passingScore: {
    type: Number,
    default: 60,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Test', testSchema);

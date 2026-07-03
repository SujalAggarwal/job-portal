const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
    required: true,
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  isPassed: {
    type: Boolean,
    required: true,
  },
  timeTaken: {
    type: Number,
    default: 0, // in seconds
  },
  answers: [{
    questionIndex: Number,
    selectedAnswer: Number,
    isCorrect: Boolean,
  }],
  attemptedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Score', scoreSchema);

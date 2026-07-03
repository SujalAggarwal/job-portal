const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  resume: {
    type: String,
    default: null,
  },
  coverLetter: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['Applied', 'Under Review', 'Shortlisted', 'Rejected', 'Accepted'],
    default: 'Applied',
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Application', applicationSchema);

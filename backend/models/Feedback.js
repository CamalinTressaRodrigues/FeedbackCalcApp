const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  courseID: {
    type: String, required: true
  },
  feedbackScores: {
    relevance: { type: Number, required: true },
    clarity: { type: Number, required: true },
    confidence: { type: Number, required: true },
    trainerRating: { type: Number, required: true },
  },
  comments: { type: String },
  finalFeedbackScore: { type: Number, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseID:
    { type: String, required: true, unique: true },
  courseName:
    { type: String, required: true },
  OU: {
    type: String, required: true
  },
  typeOfTraining:
    { type: String, required: true },
  startDate:
    { type: Date, required: true },
  endDate:
    { type: Date, required: true },
  batchCount:
    { type: Number, required: true },
  nameOfTrainer:
    { type: String, required: true },
  status:
    { type: String, required: true },
  finalFeedback:
    { type: Number, default: 0 },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

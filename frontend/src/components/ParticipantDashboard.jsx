import { useState } from 'react';
import PropTypes from 'prop-types';
import './participantDashboard.css'; 

const ParticipantDashboard = () => {
  const [feedback, setFeedback] = useState({
    courseRelevance: 0,
    contentDelivery: 0,
    confidence: 0,
    trainerRating: 0,
    enjoyMost: '',
    additionalComments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleStarRating = (rating, field) => {
    setFeedback({
      ...feedback,
      [field]: rating,
    });
  };

  const handleTextChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = 'https://www.ictkerala.org';
    }, 2000);
  };

  if (submitted) {
    return (
      <h2 className="thank-you-message">
        Thank you for your valuable feedback!
      </h2>
    );
  }

  return (
    <div className="dashboard-container">
      <h2 className="form-title">Participant Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            The training course was relevant and helpful for me to relate:
          </label>
          <StarRating
            value={feedback.courseRelevance}
            onChange={(rating) => handleStarRating(rating, 'courseRelevance')}
          />
        </div>
        <div className="form-group">
          <label>Delivery of the content was clear and understandable:</label>
          <StarRating
            value={feedback.contentDelivery}
            onChange={(rating) => handleStarRating(rating, 'contentDelivery')}
          />
        </div>
        <div className="form-group">
          <label>I am confident in applying the learnings into practice:</label>
          <StarRating
            value={feedback.confidence}
            onChange={(rating) => handleStarRating(rating, 'confidence')}
          />
        </div>
        <div className="form-group">
          <label>How would you rate the trainer?</label>
          <StarRating
            value={feedback.trainerRating}
            onChange={(rating) => handleStarRating(rating, 'trainerRating')}
          />
        </div>
        <div className="form-group">
          <label>What did you enjoy the most about the training session?</label>
          <textarea
            name="enjoyMost"
            value={feedback.enjoyMost}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Any additional comments/suggestions:</label>
          <textarea
            name="additionalComments"
            value={feedback.additionalComments}
            onChange={handleTextChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const StarRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  return (
    <div className="star-rating">
      {stars.map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${
              starValue <= (hoverValue || value) ? 'filled' : ''
            }`}
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(undefined)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired, 
  onChange: PropTypes.func.isRequired, 
};

export default ParticipantDashboard;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './IQACoordinatorDashboard.css';

const IQACoordinatorDashboard = () => {
  const [recentCourses, setRecentCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentCourses = async () => {
      try {
        const response = await axios.get('/api/courses/recent-completed');
        setRecentCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recent courses:', error);
      }
    };

    fetchRecentCourses();
  }, []);

  const handleMoreDetails = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">IQA Coordinator Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>OU</th>
            <th>Feedback Score</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {recentCourses.map((course) => (
            <tr key={course.CourseID}>
              <td>{course.CourseName}</td>
              <td>{course.OU}</td>
              <td>{course.FinalFeedback}</td>
              <td>
                <button
                  className="more-button"
                  onClick={() => handleMoreDetails(course.CourseID)}
                >
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IQACoordinatorDashboard;

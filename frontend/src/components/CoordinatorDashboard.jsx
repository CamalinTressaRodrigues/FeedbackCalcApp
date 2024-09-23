import { useState, useEffect } from 'react';
import axios from 'axios';

const CoordinatorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]); // Initialize with an empty array
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    OU: 'Academic',
    trainingType: 'LTT',
    startDate: '',
    endDate: '',
    batchCount: 0,
    trainerName: '',
    status: 'Upcoming',
    finalFeedback: '',
  });
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      const data = response.data;

      // Ensure that the response is an array before setting state
      if (Array.isArray(data)) {
        setCourses(data);
        setFilteredCourses(data); // Set courses to filteredCourses as well
      } else {
        console.error('Courses fetched are not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const filterCourses = (ou) => {
    const filtered = courses.filter((course) => course.OU === ou);
    setFilteredCourses(filtered);
  };

  return (
    <div>
      <h2>Training Coordinator Dashboard</h2>
      <h3>Filter Courses by OU</h3>
      <select onChange={(e) => filterCourses(e.target.value)}>
        <option value="">All</option>
        <option value="Academic">Academic</option>
        <option value="Corporate">Corporate</option>
        <option value="Retail">Retail</option>
        <option value="Government">Government</option>
      </select>

      {/* Check if filteredCourses is an array before mapping */}
      {Array.isArray(filteredCourses) && filteredCourses.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>OU</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Trainer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.courseId}>
                <td>{course.courseName}</td>
                <td>{course.OU}</td>
                <td>{course.trainingType}</td>
                <td>{course.startDate}</td>
                <td>{course.endDate}</td>
                <td>{course.trainerName}</td>
                <td>{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default CoordinatorDashboard;

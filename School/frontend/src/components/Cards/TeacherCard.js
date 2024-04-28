// TeacherCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherCard() {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({ name: '', subject: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios.get('http://localhost:3000/dashboard/teachers')
      .then(response => {
        if (response && response.data) {
          setTeachers(response.data);
        } else {
          console.error('Invalid response from server:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
        setError('Error fetching teachers. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/dashboard/teachers', formData)
      .then(() => {
        fetchTeachers();
        setFormData({ name: '', subject: '' });
        setError('');
      })
      .catch(error => {
        console.error('Error creating teacher:', error);
        setError(error.response?.data?.error || 'An error occurred');
      });
  };

  return (
    <div>
      <h2>Teachers</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {/* Display teachers */}
        {teachers.map(teacher => (
          <div key={teacher._id}>
            <h3>{teacher.name}</h3>
            <p>Subject: {teacher.subject}</p>
           
          </div>
        ))}

        {/* Form to create a new teacher */}
        <h2>Create Teacher</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <button type="submit">Create Teacher</button>
        </form>
      </div>
    </div>
  );
}

export default TeacherCard;

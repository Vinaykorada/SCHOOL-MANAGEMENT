import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentCard() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', registrationNumber: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:3000/dashboard/students')
      .then(response => {
        if (response && response.data) {
          setStudents(response.data);
        } else {
          console.error('Invalid response from server:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setError('Error fetching students. Please try again.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/dashboard/students', formData)
      .then(() => {
        fetchStudents();
        setFormData({ name: '', registrationNumber: '', password: '' });
        setError('');
      })
      .catch(error => {
        console.error('Error creating student:', error);
        setError(error.response?.data?.error || 'An error occurred');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/dashboard/students/${id}`)
      .then(() => {
        fetchStudents();
        setError('');
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        setError(error.response?.data?.error || 'An error occurred');
      });
  };

  return (
    <div>
      <h2>Students</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {/* Display students */}
        

        {/* Form to create a new student */}
        <h2>Create Student</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="registrationNumber" placeholder="Registration Number" value={formData.registrationNumber} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Create Student</button>
        </form>
      </div>
    </div>
  );
}

export default StudentCard;

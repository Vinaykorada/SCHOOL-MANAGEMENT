// Dashboard.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentCard from '../Cards/StudentCard'; // Import StudentCard component
import TeacherCard from '../Cards/TeacherCard';
import AdministratorsCard from '../Cards/AdministratorsCard';
import ParentsCard from '../Cards/ParentsCard';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <nav className="navigation">
        <ul>
          <li><Link to="/dashboard/students">Students</Link></li>
          <li><Link to="/dashboard/teachers">Teachers</Link></li>
          <li><Link to="/dashboard/administrators">Administrators</Link></li>
          <li><Link to="/dashboard/parents">Parents</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/dashboard/*" element={<DashboardContent />} />
      </Routes>
    </div>
  );
}

function DashboardContent() {
  return (
    <Routes>
      <Route path="students" element={<StudentCard />} />
      <Route path="teachers" element={<TeacherCard />} />
      <Route path="administrators" element={<AdministratorsCard />} />
      <Route path="parents" element={<ParentsCard />} />
    </Routes>
  );
}

export default Dashboard;

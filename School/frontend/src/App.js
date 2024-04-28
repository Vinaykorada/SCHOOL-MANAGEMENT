// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/Dashboard';
import StudentCard from './components/Cards/StudentCard';
import TeacherCard from './components/Cards/TeacherCard';
import ParentsCard from './components/Cards/ParentsCard';
import AdministratorsCard from './components/Cards/AdministratorsCard';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/students" element={<StudentCard />} />
        <Route path="/dashboard/parents" element={<ParentsCard />} />
        <Route path="/dashboard/administrators" element={<AdministratorsCard />} />
        <Route path="/dashboard/teachers" element={<TeacherCard/>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavigation() {
  return (
    <div className="left-navigation">
      <ul>
        <li><Link to="/dashboard/students">Students</Link></li>
        <li><Link to="/dashboard/teachers">Teachers</Link></li>
        <li><Link to="/dashboard/administrators">Administrators</Link></li>
        <li><Link to="/dashboard/parents">Parents</Link></li>
      </ul>
    </div>
  );
}

export default LeftNavigation;

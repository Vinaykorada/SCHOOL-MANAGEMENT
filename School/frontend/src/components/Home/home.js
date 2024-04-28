// Home.js

import React from 'react';
import './home.css'; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <img src="https://www.academyfront.com/images/blog/main-blog.png" alt="" />
      </div>
      <div className="text-container">
        <h2>WELCME TO SCHOOL MANAGEMENT SYSTEM</h2>
        
        <a href="/dashboard">
          <button className="get-started-button">Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default Home;

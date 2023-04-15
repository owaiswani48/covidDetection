import React from 'react';

import './AboutUs.css';

function About() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-profile">
          <div className="about-us-profile-image">
            <img src="https://media.licdn.com/dms/image/C4E03AQEJEUtd_xjjEQ/profile-displayphoto-shrink_800_800/0/1606014595785?e=1686787200&v=beta&t=TwITBTnF04pltu0I7pKjMmw2X0FQY7iNEbPfVgXKVPw" alt="Syed Mehdi Razzvi" />
          </div>
          <div className="about-us-profile-details">
            <h2>Syed Mehdi Razzvi</h2>
            <h3>Full Stack Developer</h3>
            <p>I am a Full Stack Developer with over 5 years of experience in building web applications. My areas of expertise include React, Node.js, and MongoDB.</p>
            <div className="about-us-profile-skills">
              <h4>Skills</h4>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

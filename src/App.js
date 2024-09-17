// src/App.js
import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm.jsx';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      {/* Navbar */}
       <header className="navbar">
        <h1 className="logo">Eksipnos</h1>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
      {/* Hero Section */}
<section id="home" className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content">
      <h2>Advance Your Career with Top Universities</h2>
      <p>Enroll in online higher education courses designed for working professionals to boost your skills and increase your pay scale.</p>
      <a href="#courses" className="cta-button">Explore Courses</a>
    </div>
  </div>
</section>

      {/* Enquiry form section */}
      <section>
        <h2>Get Free Counseling</h2>
        <p>Fill in the form below to get personalized counseling for our courses.</p>

        {/* Insert the EnquiryForm component */}
        <EnquiryForm />
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <h2>Our Courses</h2>
        <div className="courses-grid">
          {/* Bachelor's Courses */}
          <div className="course-category">
            <h3>Bachelor's Courses</h3>
            <div className="course-card">
              <img src="/images/bcom.png" alt="BCOM" />
              <h4>BCOM (Bachelor of Commerce)</h4>
              <p>Develop strong business and financial skills with a Bachelor of Commerce degree.</p>
            </div>
            <div className="course-card">
              <img src="/images/bba.png" alt="BBA" />
              <h4>BBA (Bachelor of Business Administration)</h4>
              <p>Gain business management knowledge and leadership skills.</p>
            </div>
            <div className="course-card">
              <img src="/images/bca.png" alt="BCA" />
              <h4>BCA (Bachelor of Computer Applications)</h4>
              <p>Learn essential computer science skills and programming languages.</p>
            </div>
            <div className="course-card">
              <img src="/images/ba.png" alt="BA" />
              <h4>BA (Bachelor of Arts)</h4>
              <p>Explore a variety of subjects in humanities, social sciences, and more.</p>
            </div>
          </div>

          {/* Master's Courses */}
          <div className="course-category">
            <h3>Master's Courses</h3>
            <div className="course-card">
              <img src="/images/mba.png" alt="MBA" />
              <h4>MBA (Master of Business Administration)</h4>
              <p>Advance your career in business with a world-class MBA program.</p>
            </div>
            <div className="course-card">
              <img src="/images/mca.png" alt="MCA" />
              <h4>MCA (Master of Computer Applications)</h4>
              <p>Deepen your understanding of computer science and IT management.</p>
            </div>
            <div className="course-card">
              <img src="/images/mcom.png" alt="MCOM" />
              <h4>MCOM (Master of Commerce)</h4>
              <p>Specialize in accounting, finance, and business management.</p>
            </div>
            <div className="course-card">
              <img src="/images/jmc.png" alt="MAJMC" />
              <h4>MAJMC (Master of Journalism & Mass Communication)</h4>
              <p>Enhance your skills in journalism, media, and communication studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We partner with top-tier universities to offer affordable and flexible online degree programs for working professionals. Our goal is to help you improve your skills and advance your career without sacrificing your current job.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: info@eksipnos.in</p>
        <p>Phone: +91 9901215660</p>
        <p>Get in touch for <strong>free counseling</strong> to help choose the right course for your career growth!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Eksipnos. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;

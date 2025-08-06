// src/components/Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
const Home = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
      
 

      <div style={{ maxWidth: '1440px', margin: 'auto',maxHeight:'800px' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img
              src="https://www.dexway.com/wp-content/uploads/2018/03/cursos-de-idiomas-elearning-Classroom-Companion.jpg"
              alt="Slide 1"
              style={styles.slideImg}
            />
            <p className="legend">Manage Courses</p>
          </div>
          <div>
            <img
              src="https://www.cae.net/wp-content/uploads/2018/03/dexway-classroom-companion-ingles-uk.jpg"
              alt="Slide 2"
              style={styles.slideImg}
            />
            <p className="legend">Track Attendance</p>
          </div>
          <div>
            <img
              src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2023/12/AdobeStock_574277323-scaled-840x560-center-middle.jpeg"
              alt="Slide 3"
              style={styles.slideImg}
            />
            <p className="legend">Upload Study Materials</p>
          </div>
        </Carousel>
      </div>
     {/* Hero Section */}
     <section style={styles.hero}>
        <h1>Welcome to College Auth System</h1>
        <p>Secure login & registration for students and faculty.</p>
        <button style={styles.cta}>Get Started</button>
      </section>
      {/* Features Section */}
      <section style={styles.features}>
        <h2>Key Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureBox}>
            <h3>Secure Auth</h3>
            <p>Fully protected login and registration system.</p>
          </div>
          <div style={styles.featureBox}>
            <h3>Role Management</h3>
            <p>Admin, student, and faculty access control.</p>
          </div>
          <div style={styles.featureBox}>
            <h3>Course Uploads</h3>
            <p>Easily manage course materials and videos.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <h2>About This Platform</h2>
        <p>This system is designed to simplify college-level access to courses, materials, and administrative tools through a secure web portal.</p>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: support@collegeauth.com</p>
        <p>Phone: +91-1234567890</p>
      </section>

    </div>
  );
};

const styles = {
  hero: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#0d0d0d',
    color: '#fff',
  },
  cta: {
    marginTop: '1rem',
    padding: '0.7rem 1.5rem',
    backgroundColor: '#1e90ff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  carousel: {
    margin: '2rem auto',
    maxWidth: '800px',
  },
  features: {
    padding: '2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  featureGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  featureBox: {
    width: '250px',
    padding: '1rem',
    margin: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  about: {
    padding: '2rem',
    backgroundColor: '#e8f0fe',
    textAlign: 'center',
  },
  contact: {
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
};

export default Home;

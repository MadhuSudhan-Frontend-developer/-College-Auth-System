import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', color: '#333', paddingBottom: '2rem' }}>
      
      {/* Carousel Section */}
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img
              src="https://www.dexway.com/wp-content/uploads/2018/03/cursos-de-idiomas-elearning-Classroom-Companion.jpg"
              alt="Slide 1"
            />
            <p className="legend">Manage Courses</p>
          </div>
          <div>
            <img
              src="https://www.cae.net/wp-content/uploads/2018/03/dexway-classroom-companion-ingles-uk.jpg"
              alt="Slide 2"
            />
            <p className="legend">Track Attendance</p>
          </div>
          <div>
            <img
              src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2023/12/AdobeStock_574277323-scaled-840x560-center-middle.jpeg"
              alt="Slide 3"
            />
            <p className="legend">Upload Study Materials</p>
          </div>
        </Carousel>
      </div>

      {/* Course Videos Section */}
      <div style={styles.courseSection}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Course Videos</h2>
        <div style={styles.cardGrid}>
          {/* AI Course Card */}
          <div style={styles.card}>
            <h3>AI Course</h3>
            <div style={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/2ePf9rue1Ao"
                title="AI Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>

          {/* Java Course Card */}
          <div style={styles.card}>
            <h3>Java Course</h3>
            <div style={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/grEKMHGYyns"
                title="Java Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>

          {/* English Course Card */}
          <div style={styles.card}>
            <h3>English Course</h3>
            <div style={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/oXvJ8UquYoo"
                title="English Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  courseSection: {
    padding: '3rem 2rem',
    backgroundColor: '#fff',
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '10px',
    width: '320px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    borderRadius: '8px',
    marginTop: '1rem',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
};

export default Homepage;

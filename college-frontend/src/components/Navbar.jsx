// src/components/Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    navigate("/");
    window.location.reload(); // reload navbar
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <div style={styles.logo}>🎓 CollegeAuth</div>
      </div>

      <div style={styles.center}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <a href="/resume.pdf" style={styles.link} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>

      <div style={styles.right}>
        {userEmail ? (
          <>
            <span style={styles.profile}>👤 {userEmail}</span>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.button}>Login</Link>
            <Link to="/register" style={styles.button}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
    nav: {
        position: 'sticky', // or 'fixed' for stronger behavior
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0d0d0d',
        color: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)', // optional for visual effect
      },
      
  left: { flex: 1 },
  center: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#1e90ff',
    color: '#fff',
    padding: '0.4rem 0.8rem',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  profile: {
    fontSize: '1rem',
    marginRight: '0.5rem',
  },
};

export default Navbar;

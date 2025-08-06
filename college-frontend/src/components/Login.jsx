// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8082/api/users/login', form);
      if (res.data === "Login successful") {
        localStorage.setItem("userEmail", form.email); // ✅ Save login info
        alert("Login success!");
        navigate("/homepage");
        window.location.reload(); // ✅ Refresh to re-render Navbar
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Error during login");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

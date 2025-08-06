// src/components/Register.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8082/api/users/register', form);
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

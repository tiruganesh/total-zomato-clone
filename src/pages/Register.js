import React from 'react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-card">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;

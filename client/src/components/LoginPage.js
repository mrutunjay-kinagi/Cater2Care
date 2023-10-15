import React from 'react';
import './style/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login to Cater2Care</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="login-button">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
}

export default LoginPage;

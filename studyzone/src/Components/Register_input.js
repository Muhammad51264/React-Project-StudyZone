import React, { useState } from 'react';
import LoginIcons from './loginIcons';
import { Link,  useNavigate } from 'react-router-dom';

const Register_input = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !repassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== repassword) {
      alert('Passwords do not match');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    const userData = {
      username,
      email,
      password
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    setUsername('');
    setEmail('');
    setPassword('');
    setRepassword('');

    navigate('/LandingPage');
  };

  return (
    <div className="login_container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="column">
          <div className="input-groups_title">
            <h1>Sign up</h1>
          </div>
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="input-groups">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required=""
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="input-groups">
            <label htmlFor="Repassword">Re-Password</label>
            <input
              type="password"
              id="Repassword"
              name="password"
              placeholder="Enter your Password"
              required=""
              value={repassword}
              onChange={handleRepasswordChange}
            />
          </div>

          <div className="input-groups">
            <button className="btn-login" type="submit">
              Sign up
            </button>
          </div>
          <div className="checkbox signup-link">
            <p style={{ fontSize: 18 }}>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
          <div className="input-groups checkbox signup-link text_with_line">
            <h2>
              <span>or continue with</span>
            </h2>
          </div>
          <LoginIcons />
        </div>
        <div className="registration_column_img"></div>
      </form>
    </div>
  );
};

export default Register_input;

import React from 'react'
import LoginIcons from './loginIcons'
const Register_input = () => {
  return (
    <div className="login_container">
    <form className="login-form" action="#" method="POST">
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
          />
        </div>

   
        <div className="input-groups">
          <button className="btn-login" type="submit">
            Sign up
          </button>
        </div>
        <div className="checkbox signup-link">
          <p style={{ fontSize: 18 }}>
          Already have an account ? <a href="#">Sign In</a>
          </p>
        </div>
        <div className="input-groups checkbox signup-link text_with_line">
          <h2>
            <span>or continue with</span>
          </h2>
        </div>
   <LoginIcons/>
      </div>
      <div className="registration_column_img"></div>
    </form>
  </div>
  
  )
}

export default Register_input

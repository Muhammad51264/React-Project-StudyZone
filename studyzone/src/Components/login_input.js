import React from 'react'

const Login_input = () => {
  return (
    <div className="login_container">
    <form className="login-form" action="#" method="POST">
      <div className="column">
        <div className="input-groups_title">
          <h1>Welcome Back !</h1>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required=""
          />
        </div>
        <div className=" checkbox ">
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <a href="#">Forgot password ?</a>
          </div>
        </div>
        <div className="input-groups">
          <button className="btn-login" type="submit">
            Login
          </button>
        </div>
        <div className="checkbox signup-link">
          <p style={{ fontSize: 18 }}>
            Don't have an account ? <a href="#">Sign up</a>
          </p>
        </div>
        <div className="checkbox signup-link text_with_line">
          <h2>
            <span>or continue with</span>
          </h2>
        </div>
        <div className="icons  ">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <div className="login_column_img"></div>
    </form>
  </div>
  
  )
}

export default Login_input

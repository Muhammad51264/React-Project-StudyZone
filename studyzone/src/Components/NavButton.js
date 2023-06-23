import React from 'react'
import NavCategory from './navCategory';


function NavButton() {
  return (
    <>
    <div className="navbar__text">
    <NavCategory/>
    <a href='#'>Courses</a>
    <a href='#'>About us</a>
</div>
    <div className="navbar__button">
       <button className='btnLogin'>
        Login
       </button>
       <button className='btnSignUp'>
       Sign up
       </button>
    </div>
    </>
        )
      }

export default NavButton

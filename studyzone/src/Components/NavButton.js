import React from 'react'


function NavButton() {
  return (
    <>
    <div className="navbar__text">
    <a href='#'>Category 		<svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg></a>

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

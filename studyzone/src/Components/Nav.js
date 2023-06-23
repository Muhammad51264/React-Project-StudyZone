import React from 'react'
import NavButton from "./NavButton"
import NavIcons from './navIcons';
import NavSearch from './navSearch';
import { Link } from 'react-router-dom';
const Nav = () => {
console.log(window.location.href[7]==="l");

  return (
    <nav className="navbar_">
      <div className="navbar__logo">
        <Link to="/"><img src='../Images/logo-no-background.png' alt='logo'></img>
</Link>
      </div>
      <NavSearch/>

    <NavButton/>

    {/* <NavIcons/> */}


    </nav>
  );
}

export default Nav

import React from 'react'
import { FaSistrix } from "react-icons/fa";
import NavButton from "./NavButton"
import NavIcons from './navIcons';
const Nav = () => {
  return (
    <nav className="navbar_">
      <div className="navbar__logo">
        <img src='../Images/logo-no-background.png'></img>
      </div>
      <div className="navbar__search">
  <span><FaSistrix /></span>
  <input type="text" placeholder="Search for anythings" />
</div>
 

    {/* <NavButton/> */}

    <NavIcons/>


    </nav>
  );
}

export default Nav

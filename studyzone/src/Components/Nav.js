import React from 'react'
import { FaSistrix } from "react-icons/fa";
import NavButton from "./NavButton"
const Nav = () => {
  return (
    <nav className="navbar_">
      <div className="navbar__logo">
        <img src='../Images/logo-no-background.png'></img>
      </div>
      <div class="navbar__search">
  <span><FaSistrix /></span>
  <input type="text" placeholder="Search for anythings" />
</div>
      <div className="navbar__text">Right-aligned text</div>

    <NavButton/>

    </nav>
  );
}

export default Nav

import React from 'react'
import { FaSistrix } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar_">
      <div className="navbar__logo">Logo</div>


      <div class="navbar__search">
  <span><FaSistrix /></span>
  <input type="text" placeholder="Search for anythings" />
</div>

      <div className="navbar__text">Right-aligned text</div>
    </nav>
  );
}

export default Nav

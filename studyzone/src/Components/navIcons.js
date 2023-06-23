import React from 'react'
import { FaBell ,FaCartPlus,FaHeart} from "react-icons/fa";
import NavCategory from './navCategory';
function NavIcons() {
  return (
    <>
    <div className="navbar__text">
        <NavCategory/>
 
    <a href='#'>My Learning</a>
   
</div>
    <div className="navbar__button navbar_icons">
        <a href='#'>
        <span><FaCartPlus /></span>
        </a>
        <a href='#'>
        <span><FaHeart /></span>
        </a>
        <a href='#'>
        <span><FaBell /></span>
        </a>
  
  <a href='#' className='nav_profile'>
  <img src='../Images/girl_landing_page.png'></img>
   <span>Elisa </span>
  </a>

    </div>
    </>
        )
      }

export default NavIcons

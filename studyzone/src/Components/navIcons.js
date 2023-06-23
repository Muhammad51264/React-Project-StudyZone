import React from 'react'
import { FaBell ,FaCartPlus,FaHeart} from "react-icons/fa";

function NavIcons() {
  return (
    <>
    <div className="navbar__text">
        <li className='nav_dropdowns'>
    <a href='#' >Category 	<svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg></a>

                <ul class="nav_category_dropdown">
                        <li><a href="">Lawn Care</a></li>
                        <li><a href="">Walling &amp; Fencing</a></li>
                        <li><a href="">Landscape design</a></li>
                        <li><a href="">Grounds Maintenance</a></li>
                </ul>

                </li>
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
  <img src='../Images/Facebook_icon.svg'></img>
   <span>Elisa </span>
  </a>

    </div>
    </>
        )
      }

export default NavIcons

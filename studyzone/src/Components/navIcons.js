import React from 'react'
import { FaBell ,FaCartPlus,FaHeart} from "react-icons/fa";
import NavCategory from './navCategory';
import { Link } from 'react-router-dom';
function NavIcons() {
  let username=sessionStorage.getItem("username");
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
  
  <a href='#' className='nav_profile '>
   <span>{username} </span>
  </a>

  <Link to="/login" onClick={()=>{sessionStorage.setItem("username","")
sessionStorage.setItem("login","")}}>
  <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
  <style dangerouslySetInnerHTML={{ __html: "svg{fill:#49bbbd}" }} />
  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
</svg>

  </Link>


    </div>
    </>
        )
      }

export default NavIcons

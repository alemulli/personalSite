import React from "react";
import { NavLink } from "react-router-dom";

const Navmenu = (props) => {
    const setnavmenuneeded = props.setnavmenuneeded
    const isOpen = props.isOpen
    const setIsOpen = props.setIsOpen

    async function closeNavMenu () {
        setTimeout(()=>{setnavmenuneeded(false)}, 450) 
        setIsOpen("false")
    }

  return (
    <div id="navmenu"  >
      <div className={isOpen}>
        <nav className="navmenuoptions">
        <button id="closeNavMenu" onClick={closeNavMenu}><span  className="material-symbols-outlined" >
close
</span></button>
          <NavLink to ="/" alt="Home Page" onClick={closeNavMenu}>Home</NavLink>
          <NavLink to ="/aboutme" alt="About Me" onClick={closeNavMenu}>About Me</NavLink>
          <NavLink to ="/portfolio" alt="Projects" onClick={closeNavMenu}>Projects</NavLink>
      </nav></div>
  </div>
  );
};

export default Navmenu;
import React from "react";
import { NavLink } from "react-router-dom";

const Navmenu = (props) => {
    const setnavmenuneeded = props.setnavmenuneeded
    const isOpen = props.isOpen
    const setIsOpen = props.setIsOpen

    async function closeNavMenu () {
        // setIsOpen("true")
        // setTimeout(()=>{setnavmenuneeded(false); setIsOpen("false")}, 1000) 
        setnavmenuneeded(false)
        // setIsOpen("false")
        setTimeout(()=>{setIsOpen("false")},1000)
    }

  return (
    <div id="navmenu" className={isOpen} >
        <nav className="navmenuoptions">
          <NavLink to ="/" alt="Home Page" onClick={closeNavMenu}>Home</NavLink>
          <NavLink to ="/aboutme" alt="About Me" onClick={closeNavMenu}>About Me</NavLink>
          <NavLink to ="/portfolio" alt="Projects" onClick={closeNavMenu}>Projects</NavLink>
      </nav>
  </div>
  );
};

export default Navmenu;
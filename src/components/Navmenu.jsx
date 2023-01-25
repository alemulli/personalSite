import React from "react";
import { NavLink } from "react-router-dom";

const Navmenu = (props) => {
    const setnavmenuneeded = props.setnavmenuneeded

    async function closeNavMenu () {
        setTimeout(() => {setnavmenuneeded(false)}, 1000)
        
    }

  return (
    <div id="navmenu" className={`navmenuneeded`}>
        <nav className="navmenuoptions">
          <NavLink to ="/" alt="Home Page" onClick={closeNavMenu}>Home</NavLink>
          <NavLink to ="/aboutme" alt="About Me" onClick={closeNavMenu}>About Me</NavLink>
          <NavLink to ="/portfolio" alt="Projects" onClick={closeNavMenu}>Projects</NavLink>
      </nav>
  </div>
  );
};

export default Navmenu;
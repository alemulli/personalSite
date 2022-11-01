import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  async function changeActive () {
    //function that adds className active to current tab, will probably need 3 states (one for each tab) that can be toggled between active and null//
    //may need 3 functions//
    console.log("tabchanged")
  }


  return (
    <div className="header">
        <h1 className="headerh1">Lex Mullin</h1>
        <nav className="navbar">
          <NavLink to ="/" alt="Home Page" className="navlink" onClick={changeActive}>Home</NavLink>
          <NavLink to ="/aboutme" alt="About Me" className="navlink" onClick={changeActive}>About Me</NavLink>
          <NavLink to ="/portfolio" alt="Portfolio" className="navlink" onClick={changeActive}>Portfolio</NavLink>
      </nav>
  </div>
  );
};

export default Navbar;
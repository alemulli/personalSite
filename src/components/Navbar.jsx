import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const setnavmenuneeded = props.setnavmenuneeded

  async function removeActiveClass () {
    let nav1 = document.getElementsByClassName("navlink")[0]
    let nav2 = document.getElementsByClassName("navlink")[1]
    let nav3 = document.getElementsByClassName("navlink")[2]
    
    nav1.classList.remove("active")
    nav2.classList.remove("active")
    nav3.classList.remove("active")
  }

  async function changeActivetoHome () {
    removeActiveClass()
    let homeTab = document.getElementById("homeNav")
    homeTab.classList.add("active")
  }

  async function changeActivetoAbout () {
    removeActiveClass()
    let aboutTab = document.getElementById("aboutNav")
    aboutTab.classList.add("active")
  }

  async function changeActivetoProjects () {
    removeActiveClass()
    let projectsTab = document.getElementById("projectsNav")
    projectsTab.classList.add("active")
  }

  async function openNavMenu () {
    setnavmenuneeded(true)
  }

  return (
    <div className="header">
        <h1 className="headerh1">Lex Mullin</h1>
        <nav className="navbar">
          <NavLink to ="/" alt="Home Page" id="homeNav" className="navlink" onClick={changeActivetoHome}>Home</NavLink>
          <NavLink to ="/aboutme" alt="About Me" id="aboutNav" className="navlink" onClick={changeActivetoAbout}>About Me</NavLink>
          <NavLink to ="/portfolio" alt="Projects" id="projectsNav" className="navlink" onClick={changeActivetoProjects}>Projects</NavLink>
      </nav>
      <button id="hamburgernav" onClick={openNavMenu}><span  className="material-symbols-outlined" >
menu
</span></button>
  </div>
  );
};

export default Navbar;
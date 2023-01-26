import React, {useState} from "react";
import { 
  Navbar, 
  AboutMe, 
  Footer, 
  HomePage, 
  Portfolio,
  Navmenu
} from './';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const Main = () => {
  const [navmenuneeded, setnavmenuneeded] = useState(false)
  const [isOpen, setIsOpen] = useState("false")

  return (
    <Router>
      <div id="main">
        <Navbar setIsOpen={setIsOpen} setnavmenuneeded={setnavmenuneeded}/>
          <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          {navmenuneeded && <Navmenu isOpen={isOpen} setIsOpen={setIsOpen} navmenuneeded={navmenuneeded} setnavmenuneeded={setnavmenuneeded}/>}
          {/* {navmenuneeded ? (
          <Navmenu isOpen={isOpen} setIsOpen={setIsOpen} navmenuneeded={navmenuneeded} setnavmenuneeded={setnavmenuneeded}/>
          ):null} */}
          </>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;

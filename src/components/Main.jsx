import React from "react";
import { 
  Navbar, 
  AboutMe, 
  Footer, 
  HomePage, 
  Portfolio
} from './';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div id="main">
        <Navbar />
          <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          </>
        <Footer />
      </div>
    </Router>
  );
};

export default Main;

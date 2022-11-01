import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="socials">
              <a
        href="https://www.linkedin.com/in/alexa-mullin-14740817a/"
        target="_blank"
        ><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt="LinkedIn Logo"
          className="socialmedia"
      /></a>
      <a href="https://github.com/alemulli" target="_blank"
        ><img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="Github Logo"
          className="socialmedia"
      /></a>
      </div>  
      <div className="contact">
        <strong>Contact me:</strong>
        <p>alemulli@gmail.com</p>
      </div>
      {/* can I add the ability to copy my email to clipboard on click? */}
  </div>
  );
};

export default Footer;
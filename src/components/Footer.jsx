import React from "react";

const Footer = () => {
  function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("alemulli@gmail.com");
    document.getElementsByClassName("copied")[0].style.display = "inline";
    setTimeout(function () {
      document.getElementsByClassName("copied")[0].style.display = "none";
    }, 3000);
  }

  return (
    <div id="footer">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/alexa-mullin-14740817a/"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            alt="LinkedIn Logo"
            className="socialmedia"
          />
        </a>
        <a href="https://github.com/alemulli" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="Github Logo"
            className="socialmedia"
          />
        </a>
      </div>
      <div className="contact">
        <strong>Contact me:</strong>
        <p id="email" onClick={copyText}>
          alemulli@gmail.com{" "}
        </p>
        <span className="copied">Copied to Clipboard</span>
      </div>
    </div>
  );
};

export default Footer;

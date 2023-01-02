import React from "react";

const HomePage = () => {
  return (
    <div id="homePage">
        <main>
      <br />
      <h1 className="mainh1">Hi, my name is Lex Mullin.</h1>
      <p>
      I am a former teacher who decided to learn coding. Learning is what I am most passionate about in my life, and I full-heartedly believe that I made the best choice when picking coding as my next thing to learn. I instantly fell in love with the idea of working in programming, as it is an ever evolving field where there is constantly more to learn and new ways to grow. 
      </p><p>
      I have recently graduated from the Virginia Tech Coding Bootcamp powered by Fullstack Academy. While I still fully intend to continue learning independently, I am now looking for my place in the field. My goal is to utilize my newfound programming skills while also leveraging the skills I developed in the multifaceted and demanding education environment.
      </p>
      <h3>My skills:</h3>
      <ul id="skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Github</li>
        {/* <li>Python</li> */}
      </ul>
      <img src="https://ghchart.rshah.org/5ec8b9/alemulli" alt="2016rshah's Blue Github Chart" /> 
        {/* can change the color by putting a new hex code in place of 409ba5 */}
      {/* <img src="me.png" alt="Picture of Lex Mullin" className="me" /> */}

    </main>

  </div>
  );
};

export default HomePage;
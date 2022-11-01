import React from "react";

const HomePage = () => {
  return (
    <div id="homePage">
        <main>
      <br />
      <h1 className="mainh1">Hi, my name is Lex Mullin.</h1>
      <p>
        I am a career switcher from education to web development. When I was in
        the classroom, I often found myself thinking 'I wish XYZ existed on the
        internet.' And so, I decided to hone the ability to make XYZ exist. I
        want to make tools that help make teachers lives easier which will in
        turn help educate students more efficiently. I want to make engaging and
        educational learning experiences online that can be used by students. I
        intend to use my experience to draw ideas for development and personal
        projects, but would also like continued communication and feedback from
        teachers still in the classroom.
      </p>
      <h3>My technologies:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Python</li>
      </ul>
      <img src="https://ghchart.rshah.org/5ec8b9/alemulli" alt="2016rshah's Blue Github Chart" /> 
        {/* can change the color by putting a new hex code in place of 409ba5 */}
      {/* <img src="me.png" alt="Picture of Lex Mullin" className="me" /> */}

    </main>

  </div>
  );
};

export default HomePage;
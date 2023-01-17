import React, { useEffect } from "react";
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const HomePage = () => {

  useEffect(()=>{
    const createSplide = async () => {
       const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
    autoStart: true, 
  } );
  splide.mount( { AutoScroll });
    }
    createSplide()
    // play(splide)
  }, [])
 

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
      <div className="section2">
      <h3>My skills:</h3>
      <section class="splide" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/html5_ghquwo.png" /></li>
			<li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/css3_fv67om.png" /></li>
			<li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/javascript_boql5n.png" /></li>
      <li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/react_rebrnq.png" /></li>
      <li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/nodejs_qiv8sr.png" /></li>
      <li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/npm_ekl6pn.png" /></li>
      <li class="splide__slide"><img src="https://res.cloudinary.com/dyqjp130l/image/upload/v1672694389/Tech/postgresql_pahoz8.png" /></li>
      <li class="splide__slide"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /></li>
		</ul>
  </div>
</section></div>
      {/* <ul id="skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Github</li>
        <li>Python</li>
      </ul> */}
      <br /><br />
      <img id="myGitHub" src="https://ghchart.rshah.org/5ec8b9/alemulli" alt="2016rshah's Blue Github Chart" /> 
        {/* can change the color by putting a new hex code in place of 409ba5 */}
      {/* <img src="me.png" alt="Picture of Lex Mullin" className="me" /> */}

    </main>

  </div>
  );
};

export default HomePage;
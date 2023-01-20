import React from "react";

const Portfolio = () => {
  return (
    <div id="projects">
      <main>
        <br />
        <h1 className="mainh1">My projects.</h1>
        <div className="section1">
          <h3>GraceShopper — Hot Cars</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/eEYeB9Y2bEc?"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://hot-cars.onrender.com/" target="_blank">
              GraceShopper — Hot Cars
            </a>{" "}
            is an e-commerce website for buying and selling used cars, developed
            as the capstone project for Virginia Tech Coding Bootcamp powered by
            FullStack Academy. I contributed as a fullstack developer for this
            project alongside teammates Leo Cruz, Alex Winston, Dillan May, and
            Irfan Pekusic.
          </p>
          <p>
            This website was developed using PostgreSQL, Express.js, and
            React.js.
          </p>
          <ul>
            {" "}
            <li>
              {" "}
              We designed the back-end database, queries, and API routes to
              accomplish most website functionality, such as inventory
              management and the creaton of new shopping carts upon checking out
              a cart, on the back-end.
            </li>
            <li>
              {" "}
              Authentication was set up via JWT using BCrypt to hash passwords
              for extra security.
            </li>
            <li>
              We implemented a functional guest user interface that can be used
              to add and remove items from the cart if the user is not logged in
              or doesn't have a registered account.
            </li>
            <li>Media queries were used for responsive web design. </li>
            <li>
              <span>
                Github Repositories:{" "}
                <a
                  href="https://github.com/TeamDallasVirginiaChicagoFlorida/FrontEnd"
                  target="_blank"
                >
                  Front-end
                </a>
                ,{" "}
                <a
                  href="https://github.com/TeamDallasVirginiaChicagoFlorida/BackEnd"
                  target="_blank"
                >
                  Back-end
                </a>
              </span>
            </li>
          </ul>
          {/* <img
            src="https://res.cloudinary.com/dyqjp130l/image/upload/v1673977745/Cars/hotcars_w4z6kn.png"
            className="screenshots"
            alt="Screenshot of Project"
          /> */}
        </div>
        <div className="section2">
          <h3>Fitness Trackr</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/e4BqKTNMyTw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>
            Fitness Trackr is a MyFitnessPal-esque workout routine sharing
            website, developed while attending Virginia Tech Coding Bootcamp
            powered by FullStack Academy. I contributed as a fullstack developer
            for this project alongside my teammate Charles Valdez.
          </p>
          <p>
            This website was developed using PostgreSQL, Express.js, React.js,
            and Three.js.
          </p>
          <ul>
            {" "}
            <li>
              {" "}
              We designed the back-end database, queries, and API routes using
              test driven development.
            </li>
            <li>
              {" "}
              We designed a responsive front-end, aiming for a sleek and modern
              design for our webpage.
            </li>
            <li>
              {" "}
              Authentication was set up via JWT using BCrypt to hash passwords
              for extra security.
            </li>
            <li>
              Personal contributions included implementing the modal pop-up
              menus and helping reinforce my team's understanding of front-end
              development, making API fetches and using React, as well as using
              Three.js to design and implement an animated logo for the website.
            </li>
            <li>
              <span>
                Github Repositories:{" "}
                <a
                  href="https://github.com/alemulli/fitnessFront"
                  target="_blank"
                >
                  Front-end
                </a>
                ,{" "}
                <a
                  href="https://github.com/alemulli/fitnesstrackr"
                  target="_blank"
                >
                  Back-end
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="section2">
          <h3>JuiceBox</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/gXsrblHERec"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>
            JuiceBox is a public message board web app, developed while
            attending Virginia Tech Coding Bootcamp powered by FullStack
            Academy. I contributed as a fullstack developer for this project
            alongside my teammate Timothy Brennan.
          </p>
          <p>
            This website was developed using PostgreSQL, Express.js, and
            React.js.
          </p>
          <ul>
            {" "}
            <li>
              {" "}
              We designed and implemented the front-end website to what was
              initially a back-end only project.
            </li>
            <li> Authentication was set up via JWT.</li>
            <li>
              We experimented with different front-end design elements, such as
              implementing modal pop-up menus and animations using CSS.
            </li>
            <li>
              We are in the process of redeploying a live version of this
              website.
            </li>
            <li>
              <span>
                Github Repositories:{" "}
                <a
                  href="https://github.com/alemulli/juiceboxFront"
                  target="_blank"
                >
                  Front-end
                </a>
                ,{" "}
                <a href="https://github.com/alemulli/juicebox" target="_blank">
                  Back-end
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="section3">
          <h3>Snake</h3>
          <img
            src="https://res.cloudinary.com/dyqjp130l/image/upload/v1673985159/Tech/snake_omkjst.png"
            className="screenshots"
            alt="Screenshot of Project"
          />
          <p>
            <a href="https://lexsnake.netlify.app/" target="_blank">
              Snake
            </a>{" "}
            is a front-end vanilla JavaScript webapp where you can play a
            traditional Snake game.
          </p>
          <ul>
            {" "}
            <li>
              {" "}
              Difficulty and field size selectors are available for the game.{" "}
            </li>
            <li>
              {" "}
              High score, average score, and records from previous matches are
              stored for your play session.
            </li>
            <li>
              Snake games are traditionally made in JavaScript using canvas, but
              I took a different approach in using a table and having the snake
              navigate across the cells.{" "}
            </li>
            <li>
              <a href="https://github.com/alemulli/arcade" target="_blank">
                Github Repository
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

import React from "react";

const Portfolio = () => {
  return (
    <div id="projects">
      <main>
        <br />
        <h1 className="mainh1">My projects.</h1>
        <div className="section1">
          <h3>GraceShopper — Hot Cars</h3>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eEYeB9Y2bEc?" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p>
            <a href="https://hot-cars.onrender.com/" target="_blank">
              GraceShopper — Hot Cars
            </a>{" "}
            is an e-commerce website for buying and selling used cars, developed
            as the capstone project for Virginia Tech Coding Bootcamp powered by FullStack Academy. I contributed as
            a fullstack developer for this project alongside teammates Leo Cruz,
            Alex Winston, Dillan May, and Irfan Pekusic.
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
              Authentication was set up via JWT using BCrypt to hash passwords for
              extra security.
            </li>
            <li>
              We implemented a functional guest user interface that can be used to
              add and remove items from the cart if the user is not logged in or
              doesn't have a registered account.
            </li>
            <li>Media queries were used for responsive web design. </li>
            <li>
              <span>Github Repositories: <a
                  href="https://github.com/TeamDallasVirginiaChicagoFlorida/FrontEnd"
                  target="_blank"
                >
                  Front-end
                </a>, <a
                  href="https://github.com/TeamDallasVirginiaChicagoFlorida/BackEnd"
                  target="_blank"
                >
                  Back-end
                </a></span>
            </li>
          </ul>
          {/* <img
            src="https://res.cloudinary.com/dyqjp130l/image/upload/v1673977745/Cars/hotcars_w4z6kn.png"
            className="screenshots"
            alt="Screenshot of Project"
          /> */}
        </div>
        <div className="section2">
          <h3>Project 2: Title</h3>
          <p>details, details, details</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
            laoreet maximus. Etiam non sem et purus pulvinar ultrices vitae vel
            risus. Suspendisse ut tellus eu purus posuere bibendum. Nam
            tristique, nibh in tempor ultrices, nisl neque tempus eros, eu
            convallis nisl dolor in lacus. Vivamus ornare sagittis varius. Morbi
            in diam et nisl egestas fermentum. Quisque convallis feugiat nisl,
            ut elementum sem imperdiet at. In condimentum libero non metus
            fringilla, pharetra vehicula felis consectetur. Cras ornare
            condimentum pharetra. Aenean luctus metus sit amet turpis luctus
            dictum. Pellentesque porta sit amet turpis quis convallis.
            Pellentesque suscipit lacus vitae commodo dapibus. Aenean rutrum
            blandit ante vel viverra. Mauris aliquam ante velit, vel suscipit
            velit cursus id.
          </p>
          <img
            src="https://placeimg.com/1000/500/tech?2"
            className="screenshots"
            alt="Screenshot of Project"
          />
        </div>
        <div className="section3">
          <h3>Project 3: Title</h3>
          <p>details, details, details</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
            laoreet maximus. Etiam non sem et purus pulvinar ultrices vitae vel
            risus. Suspendisse ut tellus eu purus posuere bibendum. Nam
            tristique, nibh in tempor ultrices, nisl neque tempus eros, eu
            convallis nisl dolor in lacus. Vivamus ornare sagittis varius. Morbi
            in diam et nisl egestas fermentum. Quisque convallis feugiat nisl,
            ut elementum sem imperdiet at. In condimentum libero non metus
            fringilla, pharetra vehicula felis consectetur. Cras ornare
            condimentum pharetra. Aenean luctus metus sit amet turpis luctus
            dictum. Pellentesque porta sit amet turpis quis convallis.
            Pellentesque suscipit lacus vitae commodo dapibus. Aenean rutrum
            blandit ante vel viverra. Mauris aliquam ante velit, vel suscipit
            velit cursus id.
          </p>
          <img
            src="https://placeimg.com/1000/500/tech?3"
            className="screenshots"
            alt="Screenshot of Project"
          />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

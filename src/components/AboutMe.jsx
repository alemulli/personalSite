import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutMe">
        <main>
      <br />
      <h1 className="mainh1">About me.</h1>
      <div className="section1">
        <h3>Education and Experience</h3>
        <ul>
          <li>Web Development Certificate from Virginia Tech powered by Full Stack Academy</li>
          <li>
            Masters degree in Education: Curriculum and Instruction from Radford
            University
          </li>
          <li>
            Bachelors degree in Geosciences from Virginia Tech with a minor in Biology
          </li>
        </ul>
        <span id="edLogos"><img className="edLogo" src="https://www.assets.cms.vt.edu/images/Standard/Standard_RGB.svg" alt="Virginia Tech Logo" /><img className="edLogo" src="https://www.radford.edu/etc/designs/radford/core/images/branding-stacked.png" alt="Radford University Logo"/><img className="edLogo" src="https://res.cloudinary.com/dyqjp130l/image/upload/v1674246581/Tech/fsa-removebg-preview_um3aem.png" alt="Fullstack Academy Logo" /></span>
        <p>Throughout my Virginia Tech coding bootcamp powered by Fullstack Academy I learned frontend development using HTML, CSS, JavaScript, and React, as well as back end development using Node.js, Express.js, and postgreSQL, all while using Github for version control. Since graduating the program I've been working independently to expand my skills and knowledge.</p>
      </div>
      <div className="section3">
        <h3>Currently Working On</h3>
        <b>
          My main project right now is:
        </b>
        <p>Learning Typscript and learning TailwindCSS. </p>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--jkd8gwOG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1fmcim4yj8gs79ym4id.jpg" alt="List of 40 coding projects." />
          <p>I've started a list of 40 coding projects, the first of which is a calculator app that I'm using to practice new skills.</p>
          <img src="https://external-preview.redd.it/pP94m2OaJ2OLuEQliXEgLR1-XI3YXQjoCjxGbLjnUdA.jpg?auto=webp&s=9cbe05dbb89d962157a01e00b39bd3b7f5765374" alt="Meme of a bird who doesn't want to try a TypeScript cracker, but then tries it and realizes he loves it." />
          <br />
        <b>I'm also working on:</b><p>Brainstorming a new react app project, AWS Certification Training, and playing around with Unity (C#) for fun.</p>
        {/*<span className="sciencegallery">
           <img
            src="about1.JPG"
            className="sciencepic"
            alt="Picture in front of a Volcano in Iceland" />
          <img
            src="about2.JPG"
            className="sciencepic"
            alt="Picture in front of Discovery" />
          <img
            src="about4.JPG"
            className="sciencepic"
            alt="Picture with a sea urchin"
        /> 
         </span>*/}
      </div>
      {/* <div className="section2">
        <h3>Web Design Elements that are Important to Me</h3>
        <p>When it comes to what I would like to aim for in my web development, accessibility is very important to me. My vision is not very great, but it can be corrected with glasses. While my vision is correctable, I am very empathetic with people who have vision challenges and I like to keep them in mind. When I was an SME for the Earth Science Virtual Virginia course, my main responsibility was assessing the accuracy of the content. I noticed that a graphic that they had chosen to use was very difficult, even for me with corrected vision, to make out. I felt it necessary to point out that this is making content for the students inaccessible, doubly so if they have vision disabilities. While I do not face any other challenges personally when it comes to accessibility of content on the web, I do like to maintain awareness of these things for the users.</p>
      </div> */}
      {/*{<div className="section3">
        <h3>My Puppies</h3>
        <table>
          <tbody>
          <tr>
            <td>
              <p>
                Doggo ipsum borking doggo h*ck sub woofer very hand that feed
                shibe tungg much ruin diet dat tungg tho such treat, I am bekom
                fat doggorino noodle horse adorable doggo bork mlem. He made
                many woofs vvv clouds boofers shibe, pats I am bekom fat very
                taste wow. What a nice floof noodle horse yapper heckin good
                boys, shooberino. Doge mlem shibe smol borking doggo with a long
                snoot for pats wow such tempt, doing me a frighten doge h*ck.
                Thicc heckin angery woofer fat boi pats doing me a frighten,
                noodle horse very jealous pupper. Vvv very good spot doge very
                jealous pupper ur givin me a spook, many pats pupperino ruff
                very good spot, shibe super chub long doggo. what a nice floof.
                Stop it fren puggo extremely cuuuuuute lotsa pats sub woofer
                very hand that feed shibe h*ck, noodle horse super chub
                extremely cuuuuuute long doggo floofs, porgo puggorino borking
                doggo such treat most angery pupper I have ever seen.
              </p>
            </td>
            <td> */}
              {/* <img src="Bender.png" className="dogs" alt="My beagle, Bender" /> */}
            {/* </td>
            <td> */}
              {/* <img src="Hiro.png" className="dogs" alt="My Shiba Inu, Hiro" /> */}
            {/* </td>
          </tr>
          </tbody>
        </table>
      </div> */}
    </main>
  </div>
  );
};

export default AboutMe;
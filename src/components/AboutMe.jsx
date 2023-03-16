import React from "react";

const AboutMe = () => {

  const quotes = document.getElementsByClassName('quote')
  const circles = document.getElementsByClassName('circle')
  let currentQuote = 0

  function changeQuote() {
    if (currentQuote < 3) {
      currentQuote ++
    } else {
      currentQuote = 0
    }
    console.log(currentQuote)
    for (let i = 0; i<quotes.length; i++) {
      quotes[i].classList.remove('isVisible')
      circles[i].classList.remove('progressChange')
    }
    quotes[currentQuote].classList.add('isVisible')
    circles[currentQuote].classList.add('progressChange')
  }

  setInterval(changeQuote, 10000)

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
      <div className="section2">
        <h3>People I've worked with have said...</h3>
        <div id="quotes">
        <div className="quote isVisible">
          <p>"I had the pleasure of working with Lex on our final project for Fullstack Academy. Lex provided the organization, leadership, and knowledge in order for us all to be successful in our final run. Her teaching background definitely came into play when we had team members stuck on code that wasn't working. She was patient and took the time to help me understand important JavaScript and React concepts fully. Not only did she help hone my skills in coding, the whole team that we worked with was enlightened by her mastery. You could certainly tell the radiance that Lex brings to a team. I wish Lex the best of luck in the Web Development world, and thank her for her outstanding cooperation. Any employer would be so lucky to have Lex on their team!"</p>
          <div className="quoted"><img className="recimg" src="https://media.licdn.com/dms/image/D5603AQFQmatvk1K9Bw/profile-displayphoto-shrink_100_100/0/1669658416563?e=1684368000&v=beta&t=EGL892EU1xCWV_F68sK7q0HJLFt2ztLexOMoHauonb4" /><a href="https://www.linkedin.com/in/alexander-winston/">Alex Winston</a></div>
          </div>
          <div className="quote">
          <p>"Worked with Lex for our final project and I could not have asked for a better teammate! Lex's knowledge with react, JS and css etc. definitely helped our team succeed and accomplish all of our goals. Her leadership skills are amazing and helped the entire team keep on track, on top of that her critical thinking and problem solving skills showed us how important it is to think outside the box and always look for different ways to solve problems. Lex's qualities will really be a good addition to any team she works with and any company she works for."</p>
          <div className="quoted"><img className="recimg" src="https://media.licdn.com/dms/image/D5603AQFCK_L0iWMkSw/profile-displayphoto-shrink_100_100/0/1676227689090?e=1684368000&v=beta&t=yHeRINkhApWAoRN0BJb_uPbQjOrXaEYJ7qhuAeLtTjg" /><a href="https://www.linkedin.com/in/leonardo-cruz-761623255/">Leo Cruz</a></div>
          </div>
          <div className="quote">
          <p>"Not only was Lex a go-getter, she was extremely knowledgeable in all aspects of full stack development and all-in-all, a fantastic partner to have to the group . She helped break down functions for everyone to understand and it didn't seem to be an issue for her. It was almost like we had an additional instructor for the course and I can't thank her enough for that. Her patience, knowledge and way to utilize her resources to debug an issue are what makes her stand out. I know that whatever she chooses to pursue in this field, she will be an absolute rock star. Great job, Lex!"</p>
          <div className="quoted"><img className="recimg" src="https://media.licdn.com/dms/image/D5603AQGnkvIIp9kxTQ/profile-displayphoto-shrink_100_100/0/1677880090316?e=1684368000&v=beta&t=cNDMjSxeG27jj6pROG8gipE6vsRQ-7MD727QjgpNI1A" /><a href="https://www.linkedin.com/in/dillan-may-62242556/">Dillon May</a></div>
          </div>
          <div className="quote">
          <p>"Lex is awesome! I worked with her on our website about selling cars. She is very knowledgeable and helped the group debug issues on our website. She knows how to create a plan and lead the group to finishing a certain task. Definitely will be a huge asset to any company or team she is on."</p>
          <div className="quoted"><img className="recimg" src="https://media.licdn.com/dms/image/D4E03AQFWLro5c-tJzQ/profile-displayphoto-shrink_100_100/0/1670265372023?e=1684368000&v=beta&t=fScT4aLpKrjBqH2J7vvxD194s_hT47hq4vkD6TKBx9Q" /><a href="https://www.linkedin.com/in/irfanpekusic/">Irfan Pekusic</a></div>
          </div>
          <br/>
          <div id="progress"><div class="circle progressChange"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>
          </div>
      </div>
      <div className="section3">
        <h3>Currently Working On</h3>
        <ul>
          <li><p>Learning Typscript and experimenting with different CSS frameworks TailwindCSS and SASS. </p>
          <img className="meme" src="https://external-preview.redd.it/pP94m2OaJ2OLuEQliXEgLR1-XI3YXQjoCjxGbLjnUdA.jpg?auto=webp&s=9cbe05dbb89d962157a01e00b39bd3b7f5765374" alt="Meme of a bird who doesn't want to try a TypeScript cracker, but then tries it and realizes he loves it." /></li>
        
          <li><p>I've started a list of 40 coding projects, the first of which was a <a href="https://sprightly-blancmange-78ed58.netlify.app/">calculator app</a> that I'm using to practice new skills. The quiz app is next, and I believe I will try to develop it as a discord bot to quiz my fellow junior devs on programming in the discord channel I moderate.</p>
          <img className="meme" src="https://res.cloudinary.com/practicaldev/image/fetch/s--jkd8gwOG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1fmcim4yj8gs79ym4id.jpg" alt="List of 40 coding projects." /></li>
        <li>Have just started a new react app project with a front-end and back-end. More details to come as I develop it further.</li>
        <li>Studying for AWS Certification</li> 
        <li>Taking Harvards CS50 Introduction to Computer Science Course to gain some familiarity with C and Python</li>
          <li>Playing around with Unity (C#) for fun.</li>
        </ul>
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
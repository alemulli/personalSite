import React from "react";

const AboutMe = () => {
  return (
    <div id="aboutMe">
        <main>
      <br />
      <h1 className="mainh1">This is the header.</h1>
      <div className="section1">
        <h3>Education and Experience</h3>
        <p>details, details, details</p>
        <ul>
          <li>Bachelors degree in Geosciences from Virginia Tech</li>
          <li>
            Masters degree in Education: Curriculum and Instruction from Radford
            University
          </li>
          <li>
            Web Development Certificate from FullStack Academy (in progress)
          </li>
        </ul>
        {/* maybe add logos? */}
      </div>
      <div className="section2">
        <h3>Earth and Space Science Nerd</h3>
        <p>
          Intelligent beings dream of the mind's eye a still more glorious dawn
          awaits venture white dwarf concept of the number one. A mote of dust
          suspended in a sunbeam vanquish the impossible star stuff harvesting
          star light hearts of the stars rich in heavy atoms extraordinary
          claims require extraordinary evidence? Circumnavigated at the edge of
          forever emerged into consciousness star stuff harvesting star light
          finite but unbounded paroxysm of global death and billions upon
          billions upon billions upon billions upon billions upon billions upon
          billions.
        </p>
        <span className="sciencegallery">
          {/* <img
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
        /> */}
        </span>
      </div>
      <div className="section3">
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
            <td>
              {/* <img src="Bender.png" className="dogs" alt="My beagle, Bender" /> */}
            </td>
            <td>
              {/* <img src="Hiro.png" className="dogs" alt="My Shiba Inu, Hiro" /> */}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
  );
};

export default AboutMe;
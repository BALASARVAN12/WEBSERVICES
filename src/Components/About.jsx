import React from 'react';
import Hero from './Hero';
import about_banner from "../Images/pattern-bg-blue.jpg"
import "../Css/About.css"
import team from "../Images/team.jpg"
export default function About() {
  return (
    <div>
    <Hero
    cName="hero"
    heroImg={about_banner}
    title="About"
    text="welcome to our team"/>
    <p>
    <b>Alphanumeric Ideas</b> is a digital marketing agency based in Mohali, Punjab, India. We deal in digital empowerment and promotion solutions and have been accredited as one of APAC's top digital marketing agencies.<br></br><br></br>

    We are a Google Premier Partner Agency listed among the top 3% of companies in the APAC region. We have been working with leading brands like The Whole Truth Foods and Agarwal Packers and Movers, to name a few.<br></br><br></br>

    We have been in this field for over nine years now. Our team of SEO specialists, content writers, graphic designers, and web developers is always available to take on new projects.

    </p>
    <div className="ourteam">
      <img src ={team} alt="team"/>
    <div className="img-content">
      <p><h5>WHAT WE DO</h5>
        <h3>A DIGITAL MARKETING AGENCY BUILT TO BUILD YOUR MODERN BUSINESS!</h3>
        Alphanumeric Ideas is a Digital Growth and Digital Empowerment Organization working at the intersection of culture, design, and technology. We named our agency Alphanumeric Ideas because to us, the best brands are simple ones. Brands thrive on their ability to be understood. People do too. We value our craft, have a deep passion for progression, and exist to solve challenges for brands we believe in. Since the beginning, our mission has been to do great work and to have a great time doing it.<br></br>
        <h3><a href="#">Explore our Capabilities</a></h3></p>
      
  
    
    </div>
    </div>
    <hr/>

    </div>
  );
}
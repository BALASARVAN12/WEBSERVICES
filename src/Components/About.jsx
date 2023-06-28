import React,{useState} from 'react';
import "../Css/About.css"
import foundation from "../Images/foundation.jpg"
import team from "../Images/team.jpg"
import zs from"../Images/zippinderpal-singh.jpg"
import rs from"../Images/rajendrapal=singh.jpg";
import NewsLetterform from "./NewsLetterform";

import fb from"../Images/fb_icon.jpg"
import twitter from"../Images/twitter_icon.jpg"
import mail from"../Images/google_icon.jpg"
import director from"../Images/director.jpg"
import hr from"../Images/hr.jpg"
import msg from"../Images/msg.jpg"
import at from"../Images/at.jpg"
import hp from"../Images/hp.jpg"
import ps from"../Images/ps.jpg"
import pb from"../Images/pb.jpg"
//import google from "../Images/google_icon.jpg";
//import linkedin from "../Images/linkedin_logo.jpeg"
export default function About() {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  }
  return (
    <div>
      <div className="header">
About Us

      </div>
      <br></br><br></br>
      <div className="border-box">
        <h2 className="heading">About AlphaNumericIdeas</h2>
        <div className="line"></div>
        <p>
          <b>Alphanumeric Ideas</b> is a digital marketing agency based in Mohali, Punjab, India. We deal in digital empowerment and promotion solutions and have been accredited as one of APAC's top digital marketing agencies.<br></br>

          <br></br>
          We are a Google Premier Partner Agency listed among the top 3% of companies in the APAC region. We have been working with leading brands like The Whole Truth Foods and Agarwal Packers and Movers, to name a few.<br></br>

          <br></br>
          We have been in this field for over nine years now. Our team of SEO specialists, content writers, graphic designers, and web developers is always available to take on new projects.
        </p>
        <div className="timeline-container">
        <div className="timeline">
  <div className="pipe"></div>
  <div className="arrow left"></div>
  <div className={`year ${selectedYear === 2019 ? 'selected' : ''}`} onClick={() => handleYearClick(2019)}>
    <div className="circle"></div>
    2019
  </div>
  <div className={`year ${selectedYear === 2020 ? 'selected' : ''}`} onClick={() => handleYearClick(2020)}>
    <div className="circle"></div>
    2020
  </div>
  <div className={`year ${selectedYear === 2021 ? 'selected' : ''}`} onClick={() => handleYearClick(2021)}>
    <div className="circle"></div>
    2021
  </div>
  <div className={`year ${selectedYear === 2022 ? 'selected' : ''}`} onClick={() => handleYearClick(2022)}>
    <div className="circle"></div>
    2022
  </div>
  <div className={`year ${selectedYear === 2023 ? 'selected' : ''}`} onClick={() => handleYearClick(2023)}>
    <div className="circle"></div>
    2023
  </div>
  <div className="arrow right"></div>
</div>
</div>
        <div className="image-container">
          <img src={foundation} alt="team" />
          <div className="image-content">
            <p><h6>2019</h6>Foundation of the company<h6>AlphaNumericIdeas was founded in 2019</h6></p>
          </div>
        </div>
      </div>
      <div className="section-box">
    <div className="text-content">
      <p><h2><b>A DIGITAL MARKETING AGENCY BUILT TO BUILD YOUR MODERN BUSINESS!</b></h2><br></br>
Alphanumeric Ideas is a Digital Growth and Digital Empowerment Organization working at the intersection of culture, design, and technology. We named our agency Alphanumeric Ideas because to us, the best brands are simple ones. Brands thrive on their ability to be understood. People do too. We value our craft, have a deep passion for progression, and exist to solve challenges for brands we believe in. Since the beginning, our mission has been to do great work and to have a great time doing it.<br></br><br></br>
<a href = "#">Explore our Services</a></p>
    </div>
    <div className="team">
      <img src={team} alt="our team" />
    </div>
  
</div><br></br>
<div className="ourteam">
  <h2>Meet Our Experts</h2>
  <div className="line"></div>
  <h3>AlphaNumericIdeas Team</h3><br></br>
  
  <div className="teammembers">
  <div className="row">
    <div className="member">
      <img src={zs} alt="z-s" id="team_image" />
      <h4>Zippinderpal Singh</h4>
      <h5>CEO</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={zs} alt="z-s"id="team_image" />
      <h4>Zippinderpal Singh</h4>
      <h5>CEO</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={zs} alt="z-s" id="team_image" />
      <h4>Zippinderpal Singh</h4>
      <h5>CEO</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    
    {/* Repeat the above code for the remaining team members */}
    
  </div>

  <div className="row">
    <div className="member">
      <img src={director} alt="member3" id="team_image"/>
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3"id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3" id="team_image"/>
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>

    {/* Repeat the above code for the remaining team members */}
    
  </div>
  <div className="row">
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>

    {/* Repeat the above code for the remaining team members */}
    
  </div>
  <div className="row">
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>
    <div className="member">
      <img src={director} alt="member3" id="team_image" />
      <h4>P Aplinder Kaur</h4>
      <h5>Director</h5>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src={fb} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={mail} alt="" /></a></li>
        </ul>
      </div>
    </div>

    {/* Repeat the above code for the remaining team members */}
    
  </div>
</div>


  </div>
  
  <div className="borderbox">
  <div className="support">
    <div className="row">
      <div className="column">
        <img src={msg} alt="msg"  />
        <h3>24x7 Support</h3>
        <span>We are ready to help at any time.<br/>Feel free to reach us.</span>
      </div>
      <div className="column">
        <img src={at} alt="msg" />
        <h3>Awesome Team</h3>
        <span>Experienced Google AdWords Certified Team.<br/>Specialists in AdWords.</span>
      </div>
      <div className="column">
        <img src={hp} alt="msg" />
        <h3>Awesome Team</h3>
        <span>Experienced Google AdWords Certified Team.<br/>Specialists in AdWords.</span>
      </div>
    </div>
  </div>
</div>

<div className="vision-box">
  <div className="vision">
  <h3>Our Vision</h3>
  <div className="line2"></div>
    <img src={pb} alt="pb" id="our_vison" />
    <p>mnfinrjvitjvi</p>
    </div>  
</div>
<NewsLetterform />
</div>
  );
}
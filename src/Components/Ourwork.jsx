import React,{Image,Container} from 'react'
import "../Css/OurWork.css"
import work from "../Images/work.png"
import boximage1 from"../Images/boximage-1.png"
import boximage2 from"../Images/boximage2.png"
import boximage3 from"../Images/boximage3.png"
import boximage4 from"../Images/boximage4.jpg"
import boximage5 from"../Images/boximage5.jpg"
import boximage6 from"../Images/boximage6.png"
import boximage7 from"../Images/boximage7.png"
import boximage8 from"../Images/boximage8.png"
import boximage9 from"../Images/boximage9.jpg"
import boximage10 from"../Images/boximage10.png"
import boximage11 from"../Images/boximage11.png"
import boximage12 from"../Images/boximage12.png"
import boximage13 from"../Images/boximage13.jpg"
import boximage14 from"../Images/boximage14.png"
import boximage15 from"../Images/boximage15.png"
import boximage16 from"../Images/boximage16.png"
import boximage17 from"../Images/boximage17.jpg"
import boximage18 from"../Images/boximage18.png"
import boximage19 from"../Images/boximage19.png"
import boximage20 from"../Images/boximage20.jpg"
import boximage21 from"../Images/boximage21.png"
import boximage22 from"../Images/boximage22.png"
import boximage23 from"../Images/boximage23.jpg"
import boximage24 from"../Images/boximage24.jpg"
import card1 from"../Images/card1.png"
import card2 from"../Images/card2.png"
import card3 from"../Images/card3.png"
import card4 from"../Images/card4.jpg"
import card5 from"../Images/card5.jpg"

export default function Ourwork() {
  return (
    <div>
      <div id="header_ourwork">
        Our Work
      </div>
       
    <div className="Colloborate">
    <div className="work">
      <p><h6>GROWTH/EMPLOYEMENT</h6><br></br>
<b>We collaborate with ambitious brands and people;<br></br> we’d love to build something great together.</b><br></br><br></br>
<a href = "#">Colloborate with us!</a></p>
<div id="workimg">
<img src={work} alt="workimg"></img>
</div>
    </div>
  </div>
<div className="clients">
  <h5>Our Clients</h5>
  <div className="line"></div>
  <h3>Trusted by World-Class Organizations</h3>
</div><br></br><br></br>
<div className="alllogos">
<div className="logos">
  <div className="logo1">
    <img src={boximage1} alt="logo1"/>
    <img src={boximage2} alt="logo2"/>
    <img src={boximage3} alt="logo3"/>
  </div>
  </div><br></br><br></br>
  <div className="logo2">
  <img src={boximage4} alt="logo4"/>
    <img src={boximage5} alt="logo5"/>
    <img src={boximage6} alt="logo6"/>
  </div><br></br><br></br>
  <div className="logo3">
  <img src={boximage7} alt="logo7"/>
    <img src={boximage8} alt="logo8"/>
    <img src={boximage9} alt="logo9"/>
  </div><br></br><br></br>
  <div className="logo4">
  <img src={boximage10} alt="logo10"/>
    <img src={boximage11} alt="logo11"/>
    <img src={boximage12} alt="logo12"/>
  </div><br></br><br></br>
  <div className="logo5">
  <img src={boximage13} alt="logo13"/>
    <img src={boximage14} alt="logo14"/>
    <img src={boximage15} alt="logo15"/>
  </div><br></br><br></br>
  <div className="logo6">
  <img src={boximage16} alt="logo16"/>
    <img src={boximage17} alt="logo17"/>
    <img src={boximage18} alt="logo18"/>
  </div><br></br><br></br>
  <div className="logo7">
  <img src={boximage19} alt="logo19"/>
    <img src={boximage20} alt="logo20"/>
    <img src={boximage21} alt="logo21"/>
  </div><br></br><br></br>
  <div className="logo8">
  <img src={boximage22} alt="logo22"/>
    <img src={boximage23} alt="logo23"/>
    <img src={boximage24} alt="logo24"/>
  </div><br></br><br></br>
 
  </div> 
  <h3>Our Accrediations</h3>
  <div className="line3"></div>
  <div className="accrediations">
  <a href="https://www.google.com/partners/agency?id=5106298733"><img src={card1} alt="Image 1"/></a>
  <a href="#"><img src={card2} alt="Image 2"/></a>
  <a href="#"><img src={card3} alt="Image 3"/></a>
  <a href="#"><img src={card4} alt="Image 4"/></a>
  <a href="https://clutch.co/profile/alphanumeric-ideas#highlights"><img src={card5} alt="Image 4"/></a>

  </div>
  <div className="more">
    <h2>Want to know more about our work!!</h2>
    <a href="#" class="btn1">Explore our services</a>
  </div>
</div>



  )
}
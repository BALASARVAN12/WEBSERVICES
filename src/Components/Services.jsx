import React from "react";
import Card from './Card';
import html from "../Images/html.png";
import css from "../Images/css.jpeg";
import js from "../Images/js.png";
import firebase from "../Images/firebase.png"
import node_express from "../Images/node.png"
import react from "../Images/react.jpeg"
import services5 from "../Images/services5.png";
import services2 from "../Images/services2.png";
import services3 from "../Images/services3.png";
import services4 from "../Images/services4.png";
import services6 from "../Images/services1.png";
import "../Css/Services.css"
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsLetterform";

const Services = () => {
  return (
    <div>
      <div className="header">
Our Services


      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {/* Row 1 */}
        <div className="card_1">
<h4 className="ser">Services of our web development</h4>
<p className="heading-text">Our web development services provide comprehensive solutions for designing, building, and maintaining websites. 
</p>

<Link to="/Contactus" >
<div className="start_now">
Start Now!
</div>
 </Link>


        </div>
        <Card
          backgroundColor="#3CB878"
          heading="Web Design"
          paragraph="Our web design service focuses on creating visually appealing and user-friendly websites. We use modern design techniques, responsive layouts, and intuitive navigation to enhance user experience and convey your brand message effectively."
          imageUrl={services5}
        />
        <Card
          backgroundColor="#6739B6"
          heading="Web Development"
          paragraph="Our web development service involves the creation of dynamic and interactive websites. Our experienced developers use the latest technologies and frameworks to build robust and scalable web solutions that meet your specific business requirements."
          imageUrl={services2}
        />
        
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Row 2 */}
        <Card
          backgroundColor="#F15B26"
          heading="Website Maintenance and Support"
          paragraph="We provide ongoing website maintenance and support services to ensure your website remains up-to-date, secure, and optimized for performance. From regular updates and backups to bug fixes and troubleshooting, our team is dedicated to keeping your website running smoothly."
          imageUrl={services3}
        />
        <Card
          backgroundColor="#FCB03B"
          heading="CMS Development"
          paragraph="We offer content management system (CMS) development to provide you with full control over your website's content. Our CMS solutions enable you to easily manage and update your website's text, images, and multimedia without any technical knowledge, saving you time and effort."
          imageUrl={services4}
        />
        <Card
          backgroundColor="#4CC2C0"
          heading="Application Development"
          paragraph="Our application development service focuses on building custom software solutions to meet your unique business needs. Whether it's a mobile app or a web-based application, we utilize cutting-edge technologies and industry best practices to deliver high-performance and scalable applications."
          imageUrl={services6}
        />
      </div>
       <br /> <br /> <br /> <br />

       <div class="container">
  <div class="row">
    <div class="col-sm">
        <img src={html} alt="" style={{"width":"100px","height":"100px","borderRadius":"50px"}}/>
        <h2>Html</h2>
        <p>We deliver custom HTML solutions for your web development needs. Our experts ensure efficient and reliable HTML that meets your objectives.</p>
        <a href="/Services" className="read-more">Read More 
        </a>
    </div>
    <div class="col-sm">
    <img src={css} alt="" style={{"width":"100px","height":"100px","borderRadius":"50px"}}/>
        <h2>css</h2>
        <p>Enhance your website's visual appeal with our custom CSS solutions. We create stylish designs and implement custom styles to elevate your site's look and feel.</p>  <a href="/Services" className="read-more">Read More 
        </a>  </div>
    <div class="col-sm">
    <img src={js} alt="" style={{"width":"100px","height":"100px","borderRadius":"50px"}}/>
        <h2>Html</h2>
        <p>We provide JavaScript solutions to add interactivity and functionality to your web applications. From dynamic content updates to engaging user interactions, we have you covered.</p>  <a href="/Services" className="read-more">Read More 
        </a>  </div>
  </div>
</div> <br /> <br />
<div class="container">
  <div class="row">
    <div class="col-sm">
    <img src={react} alt="" style={{"width":"100px","height":"100px","borderRadius":"50px"}}/>
        <h2>React</h2>
        <p>Create dynamic and interactive user interfaces with our React expertise. Our team builds reusable components for high-performance web applications.</p> <a href="/Services" className="read-more">Read More 
        </a>   </div>
    <div class="col-sm">
    <img src={node_express} alt="" style={{"width":"100px","height":"100px","borderRadius":"90px"}}/>
        <h2>Nodejs & Expressjs</h2>
        <p>Power your backend with our Node.js and Express services. Our experts build fast and scalable server-side solutions for efficient data handling and logic execution.</p>   <a href="/Services" className="read-more">Read More 
        </a> </div>
    <div class="col-sm">
    <img src={firebase} alt="" style={{"width":"100px","height":"100px","borderRadius":"50px"}}/>
        <h2>Firebase</h2>
        <p>Leverage the power of Firebase for your web applications. Our services cover real-time database management, authentication, and scalable hosting solutions.</p> <a href="/Services" className="read-more">Read More 
        </a>   </div>
  </div>
</div> <br /> <br />
<NewsletterForm/>
    </div>
  );
};

export default Services;

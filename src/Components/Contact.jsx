import React from "react";
import "../Css/Contact.css";
//import { Breadcrumb } from 'antd';
import Button from "react-bootstrap/Button";

import contact7 from "../Images/contact7.png";
import contact8 from "../Images/contact8.png";
import contact9 from "../Images/contact9.png";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const Navigate = useNavigate();
  //submit event
  function handleSubmit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbx8mdtXGFgCSYxBD06RFoQBr0GTPTwhDiOs9YGSv19-UWb1l05XasKQ-3Lv39_ASZLj/exec",
      {
        method: "Post",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    Navigate("/Thankyou");
  }
  return (
    <div>
      <div id="header_contact_us">Contact Us</div>
      <div className="get_in_touch">
        <div className="container">
          <div className="heading">
            <h4 className="h1 heading-title">Get In Touch</h4>
            <div className="heading-line">
              <span className="short-line"></span>
              <span className="long-line"></span>
            </div>
            <div className="heading-text"></div>
            <span className="heading-text_p">
              We Deal in Digital Strategic Planning, Implementation and
              Optimizations for Digital Marketing Campaigns. In less than 60
              seconds you can create the possibility of increased growth &amp;
              profitability this year for your business and more time doing the
              things you love for yourself, by contacting us today.
            </span>
          </div>
        </div>
      </div>

      <div className="contacts_1">
          <div className="logo_1">
            <img src={contact7} alt="contact" id="img_contact_1" />
            <div className="tex_t">
              <a href="tel:+917696-855-855">+91 7696 - 855 - 855</a> <br />
              <span>
                Monday - Saturday
                <br /> 7AM - 8:30PM IST
              </span>
            </div>
          </div>
          <div className="logo_2">
            <img src={contact8} alt="mail" id="img_contact_2" />
            <div className="tex_t">
              <a href="mailto:info@ecoindia.co.in">info@ecoindia.co.in</a>{" "}
              <br />
              <span>24x7 Available</span>
            </div>
          </div>
          <div className="logo_3">
            <img src={contact9} alt="" id="img_contact_3" />
            <div className="tex_t">
              <a href="https://www.google.co.in/maps/place/ECO+India/@30.7463365,76.6585743,17z/data=!3m1!4b1!4m5!3m4!1s0x390fefe6d1d45733:0x9fca59197341d968!8m2!3d30.7463319!4d76.660763">
                Mohali, India
              </a>{" "}
              <br />
              <span>368/2, Sector - 125 Greater Mohali</span>
            </div>
          </div>
        </div>

      <div className="section">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.006056174188!2d76.65859841513178!3d30.746331381632377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe6d1d45733%3A0x9fca59197341d968!2sECO%20India!5e0!3m2!1sen!2sin!4v1567596710541!5m2!1sen!2sin"
            width="1519"
            height="632"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className="contact_form">
        <div className="left">
          <span className="h4" style={{ textAlign: "center" }}>
            Or Send Us Message :
          </span>
          <div className="heading-line1">
          <span className="short-line1"></span>
              <span className="long-line2"></span>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <label>First Name:</label>
            <input
              type="text"
              name="FirstName"
              id="fname"
              placeholder="first name"
              required
            />{" "}
            <br /> <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="LastName"
              id="lname"
              placeholder="Last name"
              required
            />{" "}
            <br /> <br />
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required
            />{" "}
            <br /> <br />
            <label>Phone:</label>
            <input
              type="tel"
              name="Phone"
              id="phone"
              placeholder="Phone Number"
              required
            />{" "}
            <br /> <br />
            <label>Message:</label>
            <textarea
              name="Message"
              class="form-control"
              placeholder="Message"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              required
            ></textarea>
            <Button className="formButton" type="submit">
              Submit
            </Button>{" "}
          </form>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}

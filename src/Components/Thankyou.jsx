import React from "react";
import "../Css/Contact.css";
//import { Breadcrumb } from 'antd';
import contact7 from "../Images/contact7.png";
import contact8 from "../Images/contact8.png";
import contact9 from '../Images/contact9.png';
import Appointment_page from "./Appointment_page";
export default function Contact() {
  return (
    <div>
      <div id="header_12">
Thank You      </div>
      <div className="get_in_touch">
      <div className="container">
            <div className="row pt120 pb80">
                <div className="col-lg-12">
                    <div className="heading">
                        <h4 className="h1 heading-title">Get In Touch</h4>
                        <div className="heading-line">
                            <span className="short-line"></span>
                            <span className="long-line"></span>
                        </div>
                        <so className="heading-text">
                        </so><span className="heading-text">We Deal in Digital Strategic Planning, Implementation and Optimizations
                            for Digital Marketing Campaigns. In less than 60 seconds you can create the possibility of
                            increased growth &amp; profitability this year for your business and more time doing the things
                            you love for yourself, by contacting us today.</span>
                      
                    </div>
                </div>
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
    </div>
  );
}

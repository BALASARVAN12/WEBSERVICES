import React from "react";
import "../Css/Contact.css";
//import { Breadcrumb } from 'antd';

export default function Contact() {
  return (
    <div>
      <div id="header">
Contact Us
      </div>
      <br />
      <div className="contact_section_1">
        <h5>
          We would love to hear from you! If you have any questions, inquiries,
          or would like to discuss how our services can benefit your
          organization, please don't hesitate to reach out to us.
        </h5>
        <div className="left">
          <h1>Lets Connect!</h1>
        </div>
        <div className="content_text">
          <p>
            Ready to unlock the full potential of your online presence? Let's
            create something <br />
            extraordinary together. Get in touch with us today!
          </p>
        </div>
      </div>{" "}
    
      <div className="locations_1">
        <div className="location_1_head">
          <h5>Head Office</h5>
          <address>
            #368, M.Kharar <br />
            Near Sunny Enclave <br />
            Mohali, PB. 140301 <br />
            India
            <br />
            <a href="mailto:contact@alphanumericideas.com">
              contact@alphanumericideas.com
            </a>{" "}
            <br />
            <a href="tel:18008901188">1800 890 1188</a>
          </address>
        </div>
        
       
      </div>
      <div className="location_2">
      <div className="location_2_head">
          <h5>Branch Office</h5> <br />
          <address>
            #7, Science & Technology <br />
            Entrepreneur's Park, <br />
            Guru Nanak Dev Engineering <br /> College Road, Gill Park, <br />
            Ludhiana, PB. 141006 <br />
            India
            <br /> <br />
            <a href="mailto:contact@alphanumericideas.com">
              contact@alphanumericideas.com
            </a>{" "}
            <br />
            <a href="tel:18008901188">1800 890 1188</a>
          </address>
        </div>
        <div className="location_2_head">
        <h5>Branch Office</h5> <br />
        <address>
        #368, M.Kharar <br />
Near Sunny Enclave <br />
Mohali, PB. 140301 <br />
India
<br /> <br />  <br /> <br />
<a href="mailto:contact@alphanumericideas.com">contact@alphanumericideas.com</a> <br />
<a href="tel:18008901188">1800 890 1188</a>
        </address>
      </div>
      </div>
      <div className="location_3">
      <div className="location_3_head">
          <h5>USA</h5> <br />
          <address>
          1309 Coffeen Avenue, <br />
STE 1200 Sheridan, <br />
WY 82801 - USA <br />

            <br /> 
            <a href="mailto:contact@alphanumericideas.com">
              contact@alphanumericideas.com
            </a>{" "}
            <br />
            <a href="tel:18008901188">1800 890 1188</a>
          </address>
        </div>
      </div>
      <br />

      <div className="contact_section_2"></div>
    </div>
  );
}

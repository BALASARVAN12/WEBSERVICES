import React from "react";
import contact_footer from "../Images/contact_footer_logo.png";
import mail_footer from "../Images/mail_footer.png";
import location_logo from "../Images/location_logo.png";
import up_arrow from "../Images/up-arrow.png";

import "../Css/Footer.css";

export default function vs() {
  return (
    <>
      <div className="footer">
        <div className="contacts">
          <div className="contact_1">
            <img src={contact_footer} alt="contact" id="img_contact_1" />
            <div className="text">
              <a href="tel:+917696-855-855">+91 7696 - 855 - 855</a> <br />
              <span>
                Monday - Saturday
                <br /> 7AM - 8:30PM IST
              </span>
            </div>
          </div>
          <div className="contact_2">
            <img src={mail_footer} alt="mail" id="img_contact_2" />
            <div className="text">
              <a href="mailto:info@ecoindia.co.in">info@ecoindia.co.in</a>{" "}
              <br />
              <span>24x7 Available</span>
            </div>
          </div>
          <div className="contact_3">
            <img src={location_logo} alt="" id="img_contact_3" />
            <div className="text">
              <a href="https://www.google.co.in/maps/place/ECO+India/@30.7463365,76.6585743,17z/data=!3m1!4b1!4m5!3m4!1s0x390fefe6d1d45733:0x9fca59197341d968!8m2!3d30.7463319!4d76.660763">
                Mohali, India
              </a>{" "}
              <br />
              <span>368/2, Sector - 125 Greater Mohali</span>
            </div>
          </div>
        </div>
      </div>

      <div className="social_media_icons">
        <a href="#">
        <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/></svg>        </a>
        <a href="#">
        <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#17bdef"><path d="M15 3.784a5.63 5.63 0 0 1-.65.803 6.058 6.058 0 0 1-.786.68 5.442 5.442 0 0 1 .014.377c0 .574-.061 1.141-.184 1.702a8.467 8.467 0 0 1-.534 1.627 8.444 8.444 0 0 1-1.264 2.04 7.768 7.768 0 0 1-1.72 1.521 7.835 7.835 0 0 1-2.095.95 8.524 8.524 0 0 1-2.379.329 8.178 8.178 0 0 1-2.293-.325A7.921 7.921 0 0 1 1 12.52a5.762 5.762 0 0 0 4.252-1.19 2.842 2.842 0 0 1-2.273-1.19 2.878 2.878 0 0 1-.407-.8c.091.014.181.026.27.035a2.797 2.797 0 0 0 1.022-.089 2.808 2.808 0 0 1-.926-.362 2.942 2.942 0 0 1-.728-.633 2.839 2.839 0 0 1-.65-1.822v-.033c.402.227.837.348 1.306.362a2.943 2.943 0 0 1-.936-1.04 2.955 2.955 0 0 1-.253-.649 2.945 2.945 0 0 1 .007-1.453c.063-.243.161-.474.294-.693.364.451.77.856 1.216 1.213a8.215 8.215 0 0 0 3.008 1.525 7.965 7.965 0 0 0 1.695.263 2.15 2.15 0 0 1-.058-.325 3.265 3.265 0 0 1-.017-.331c0-.397.075-.77.226-1.118a2.892 2.892 0 0 1 1.528-1.528 2.79 2.79 0 0 1 1.117-.225 2.846 2.846 0 0 1 2.099.909 5.7 5.7 0 0 0 1.818-.698 2.815 2.815 0 0 1-1.258 1.586A5.704 5.704 0 0 0 15 3.785z"/></svg>        
        </a>
        <a href="#">
        <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/></svg>
        </a>
        <a href="#">
        <svg width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"/><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"/></svg>
        </a>
      </div>

      <div className="foo">
        <div id="f_down">
          <span id="ff_l" style={{ color: "#504D4E" }}>
            Copyright © 2019{" "}
            <a className="a" href="/">
              ECO India
            </a>
          </span>
          <a className="back-to-top" href="#">
            <img src={up_arrow} alt="" id="up_arrow" />
          </a>
        </div>
      </div>
    </>
  );
}

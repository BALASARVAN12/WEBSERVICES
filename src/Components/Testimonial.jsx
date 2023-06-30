import React, { useEffect } from "react";
import "../Css/TestimonialsSlider.css";
import signature from "../Images/signature.png";
import avatar from "../Images/avatar.png";
import thumb from "../Images/testimonial1.png";
import hand from "../Images/testimonial2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Autoplay interval in milliseconds
  };
  return (
    <div className="testmonial">
      <div className="testimonial_slidebar_scrollme">
        <div className="head">
          <h1>Happy clients about us</h1>
          <div className="counter-line">
            <div className="short--line"></div>
            <div className="long--line"></div>
          </div>
          <p>Source : Google Reviews</p>
          <img src={signature} alt="" id="signature"/>
          <div className="signature">
           
          </div>
        </div>

        <div className="testi">
        
          <div className="test_i">
          <div className="box_text">
            <div className="content_testimonial1">
            <p className="text_testimonial">If you want google certified agency and best marketing strategies this is the best place </p>
            <a href="#" className="testimonial_name">Jatin Deep</a> <br />
            <a href="#" className="testimonial_designation">Entrepreneur</a>
            </div>
            <div className="avatar_testimonial">
              <img src={avatar} alt="" />
            </div>
          </div>
          </div>
          <div className="right_image">
          
            <img src={thumb} alt="" className="thumb"/>
        </div>
        </div>

        <div data-aos="fade-up">
          <img src={hand} alt="" className="speak"/>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import "../Css/TestimonialsSlider.css";
import signature from "../Images/signature.png";
import avatar from "../Images/avatar.png";
import thumb from "../Images/testimonial1.png";
import hand from "../Images/testimonial2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  
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
          
          <div class="content_testimonial1">
  <div>
    <p className="text_testimonial">If you want google certified agency and best marketing strategies this is the best place </p>
            <a href="#" className="testimonial_name">Jatin Deep</a> <br />
            <a href="#" className="testimonial_designation">Entrepreneur</a>
  </div>
  <div>
   <p className="text_testimonial">Great Amazing People</p>
            <a href="#" className="testimonial_name" style={{paddingLeft:"75px"}}>Varun Grover</a> <br />
            <a href="#" className="testimonial_designation" style={{paddingLeft:"75px"}}>Amartex</a>
  </div>
  <div>
  <p className="text_testimonial">Very satisfactory
                                                        results delivered so far. 4 out of 5 star reason is that there
                                                        is always scope of improvement. All the best for future business
                                                        and our relationship.</p>
            <a href="#" className="testimonial_name">Vishal Sharma</a> <br />
            <a href="#" className="testimonial_designation">NVA Enterprises</a>
  </div>

  <div>
  <p className="text_testimonial">Very satisfactory
                                                        results delivered so far. 4 out of 5 star reason is that there
                                                        is always scope of improvement. All the best for future business
                                                        and our relationship.</p>
            <a href="#" className="testimonial_name">Vishal Sharma</a> <br />
            <a href="#" className="testimonial_designation">NVA Enterprises</a>
  </div>
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

import React, { useRef, useState, useEffect } from 'react';
import '../Css/NewsLetterform.css';
import sub1 from '../Images/subscr-gear.png';
import sub2 from '../Images/subscr1.png';
import sub3 from '../Images/subscr-mailopen.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsLetterform() {
  const imageRef = useRef(null);
  const [shouldRotate, setShouldRotate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setShouldRotate(isVisible);
      }
    };

    AOS.init();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="newsletter">
      <div data-aos="fade-up">
      <img src={sub2} alt="sub2" className="mail" />
      </div>
      <div className="field">
        <h4 className="email_label">Email NewsLetters!</h4>
        <form className="subscribe-form">
          <input type="email" name="Email" className="mail_input" placeholder="Email" />
          <button className="sub_button">Subscribe</button>
        </form>
        <div className="sub_title">
          Sign up for new content, updates, surveys & offers by Alphanumericideas!
        </div>
      </div>

      <div className="image-block" >
       <div data-aos="fade-left">
        <img src={sub3} alt="" className="mail_2" style={{ opacity: '1', right: '20px' }} />
        </div>
        <img
          ref={imageRef}
          src={sub1}
          alt=""
          className={`gear ${shouldRotate ? 'rotate' : ''}`}
          data-aos="rotate"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Hero.css";
import slider1 from "../Images/slider1.png";
import slider2 from "../Images/slider2.png";
import slider3 from "../Images/slider3.png";
import slider4 from "../Images/slider4.png";
import slider5 from "../Images/slider5.png";
import AOS from "aos";
import "aos/dist/aos.css";
const MyCarousel = ({ activeIndex, onSelect }) => {
  const slideColors = ["#ffffff", "#4CC2C0", "#F15B26", "#FCB03B", "#3CB878"];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Carousel activeIndex={activeIndex} onSelect={onSelect}>
      <Carousel.Item>
        <div
          className="slide1"
          style={{ backgroundColor: slideColors[0] }} // Apply the background color based on the activeIndex
        >
          <div data-aos="fade-left" data-aos-delay="300">
            <img src={slider1} id="slider1" alt="..." />
          </div>
          <Carousel.Caption>
            <div className="cms_development">
              <h3 style={{ color: "#2F2C2C" }}>Cms Development</h3>
              <span style={{ color: "#335643" }}>
                CMS stands for Content Management System. It is a software
                application or a set of tools that allows users to create,
                manage, and publish digital content on the web without requiring
                extensive technical knowledge.
              </span>
              <br />
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide2" style={{ backgroundColor: slideColors[1] }}>
          <div data-aos="fade-left" data-aos-delay="300">
            <img src={slider2} className="d-block" id="slider2" alt="..." />
          </div>
          <Carousel.Caption>
            <div className="web_design">
              <h3 style={{ color: "#2F2C2C" }}>Web Design</h3> <br />
              <span style={{ color: "#335643" }}>
                Web design refers to the process of creating visually appealing
                <br />
                and functional websites. It involves the careful arrangement
                <br /> of various elements such as layout, color scheme,
                typography,
                <br /> graphics, and interactive features to create an engaging
                user experience.{" "}
              </span>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide3" style={{ backgroundColor: slideColors[2] }}>
          <a href="/Services">
            <div data-aos="fade-left" data-aos-delay="300">
              <img src={slider3} className="d-block" id="slider3" alt="..." />
            </div>
          </a>
          <Carousel.Caption>
            <div className="web_design">
              <h3 style={{ color: "#2F2C2C" }}>Web Design</h3> <br />
              <span style={{ color: "#335643" }}>
                Web design refers to the process of creating visually appealing
                <br />
                and functional websites. It involves the careful arrangement
                <br /> of various elements such as layout, color scheme,
                typography,
                <br /> graphics, and interactive features to create an engaging
                user experience.{" "}
              </span>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide4" style={{ backgroundColor: slideColors[3] }}>
          <img src={slider4} className="d-block" id="slider4" alt="..." />
          <Carousel.Caption>
            <div className="cms_development">
              <h3 style={{ color: "#2F2C2C" }}>Cms Development</h3>
              <span style={{ color: "#335643" }}>
                CMS stands for Content Management System. It is a software
                application or a set of tools that allows users to create,
                manage, and publish digital content on the web without requiring
                extensive technical knowledge.
              </span>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide5" style={{ backgroundColor: slideColors[4] }}>
          <img src={slider5} className="" id="slider5" alt="..." />
          <Carousel.Caption>
            <div className="web_design">
              <h3 style={{ color: "#2F2C2C" }}>Web Design</h3> <br />
              <span style={{ color: "#335643" }}>
                Web design refers to the process of creating visually appealing
                <br />
                and functional websites. It involves the careful arrangement
                <br /> of various elements such as layout, color scheme,
                typography,
                <br /> graphics, and interactive features to create an engaging
                user experience.{" "}
              </span>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
  );
};

const CarouselButtons = ({ activeIndex, onSelect }) => {
  const handleButtonClick = (index) => {
    onSelect(index);
  };

  return (
    <div className="slider-slides">
      <Button
        id="button_carosuel1"
        onClick={() => handleButtonClick(0)}
        active={activeIndex === 0}
      >
        <h4>complete web development solutions</h4>
      </Button>
      <Button
        id="button_carosuel2"
        onClick={() => handleButtonClick(1)}
        active={activeIndex === 1}
      >
        <h4>appilication development</h4>
      </Button>
      <Button
        id="button_carosuel3"
        onClick={() => handleButtonClick(2)}
        active={activeIndex === 2}
      >
        <h4>website maintenance and support</h4>
      </Button>
      <Button
        id="button_carosuel4"
        onClick={() => handleButtonClick(3)}
        active={activeIndex === 3}
      >
        <h4>cms development</h4>
      </Button>
      <Button
        id="button_carosuel5"
        onClick={() => handleButtonClick(4)}
        active={activeIndex === 4}
      >
        <h4>web design</h4>
      </Button>
      {/* Add more buttons for additional slides */}
    </div>
  );
};

const Carousel_banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="ceffect">
      <MyCarousel activeIndex={activeIndex} onSelect={handleSlideSelect} />
      <CarouselButtons activeIndex={activeIndex} onSelect={handleSlideSelect} />
    </div>
  );
};

export default Carousel_banner;

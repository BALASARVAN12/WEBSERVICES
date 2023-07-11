import React from "react";
import "../Css/Home.css";
import NewsLetterform from "./NewsLetterform";
import Testimonial from "./Testimonial";
import Counter from "./Counters"; 
import "../Css/Counters.css";
import Offers from "./Offers";
import Carousel_banner from "./Carousel";
import Appointment_page from "./Appointment_page";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel_banner />
      </div>
      <Offers />
      <div className="numbers">
        <Counter number={97} title="Client Retention" />
        <Counter number={6} title="Years of experience" />
        <Counter number={80} title="Happy clients" />
        <Counter number={790} title="Projects" />
      </div>
      <Testimonial />
      <NewsLetterform />
    </div>
  );
}

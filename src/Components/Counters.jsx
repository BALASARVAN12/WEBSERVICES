import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  const [showPlus, setShowPlus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPlus(true);
    }, 10000); // Adjust the delay (in milliseconds) based on your preference
  }, []);

  return (
    <div className="number">
      <div className="count">
        <span>
          <CountUp duration={10} end={number} />
        </span> 
        {showPlus && <span className="plus">+</span>}
      </div>
      <span className="title">{title}</span>
      <div className="counter-line">
        <div className="short-line">

        </div>
        <div className="long-line">

        </div>
      </div>
    </div>
  );
}

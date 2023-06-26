import React from "react";
import "../Css/Card.css";
const Card = ({ backgroundColor, heading, paragraph, imageUrl }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <div className="card-image">
        <img src={imageUrl} alt="Card Image" />
      </div>
      <h3>{heading}</h3>
      <p>
        {paragraph}
      </p>
    </div>
  );
};


export default Card;

import React from 'react';
import "../Css/Hero.css";

export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="banner" />
      <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
      </div>
    </div>
  )
}

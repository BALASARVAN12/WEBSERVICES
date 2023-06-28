import React from "react";
import "../Css/Hero.css";
import { Link } from "react-router-dom";
import offers1 from "../Images/offers1.png";

export default function Offers() {
  return (
    <div className="container">
      <div className="row medium-padding120">
        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div className="offers">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <h4 className="h1 heading-title">
                    We Offer a Full Range of Web Development Services!
                  </h4>
                  <div className="heading-line">
                    <span className="short-line"></span>
                    <span className="long-line"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="offer_info">
                  <h5>
                    Alphanumeric Ideas is a Google Partner Digital Marketing Agency. We Deal in Digital Strategic Planning, Implementation and Optimizations for Digital Marketing Campaigns.
                  </h5>
                  <ul className="list list--secondary">
                    <li>
                      <a href="#">
                        <span className="material-symbols-outlined">done</span>Responsive Website Design and Development
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="material-symbols-outlined">done</span> Performance-Based Pricing. You Got No Business, We Get Nothing. Isn't It Interesting Enough?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="material-symbols-outlined">done</span> Team Lead by Youngest Google Certified Trainer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="material-symbols-outlined">done</span> Strong Industry Tie-Ups and Industry Synchronized Strategists
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="material-symbols-outlined">done</span> Free Innovative Solutions Offered to Educational and Charitable Organizations
                      </a>
                    </li>
                  </ul>
                  <Link to="/Services" className="btn" id="btn">
                    <span className="text">Learn More!!</span>
                  </Link>
                  <Link to="/Contactus" className="btn" id="btn1">
                    <span className="text">Get a Quote</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6" id="offers_1">
                <img src={offers1} alt="Offers Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

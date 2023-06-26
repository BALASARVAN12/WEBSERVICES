import React from "react";
import "../Css/Hero.css";
import { Link } from "react-router-dom";
import offers1 from "../Images/offers1.png";
export default function Offers() {
  return (
    <div className="container">
      <div className="row medium-padding120">
        {" "}
        <div className="col-lg-12">
          <div className="offers">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="heading">
                  <h4 className="h1 heading-title">
                    We Offer a Full Range of Digital Marketing Services!
                  </h4>
                  <div className="heading-line">
                    <span className="short-line"></span>
                    <span className="long-line"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer_info">
              <h5>
                ECO India is a Google Partner Digital Marketing <br />
                Agency. We Deal in Digital Strategic Planning,
                <br /> Implementation and Optimizations for Digital <br />
                Marketing Campaigns.
              </h5>
              <ul className="list list--secondary">
                <li>
                  <a href="#">
                    {" "}
                    <span class="material-symbols-outlined">done</span> Proven
                    Record of More than 97% Happy Clientele
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span class="material-symbols-outlined">done</span>{" "}
                    Performance-Based Pricing. You Got No Business, <br /> We
                    Get Nothing. Isn't It Interesting Enough?
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span class="material-symbols-outlined">done</span> Team
                    Lead by Youngest Google Certified Trainer
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span class="material-symbols-outlined">done</span> Strong
                    Industry Tie-Ups and Industry Synchronized <br />{" "}
                    Strategists
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span class="material-symbols-outlined">done</span> Free
                    Innovative Solutions Offered to Educational <br />
                    and Charitable Organizations
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


<img src={offers1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./about.css";
import Pic1 from "../../assets/images/about2.png";
import Pic2 from "../../assets/images/about1.png";
import Pic3 from "../../assets/images/about3.png";

const About = () => {
  return (
    <div className="about-bg">
      <section className="container">
        <div className="about-item">
          <div className="about-img">
            <div className="about-png">
              <div className="pic1">
                <img src={Pic1} alt="" />
              </div>
              <div className="pic3">
                <img src={Pic3} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={Pic2} alt="" />
              </div>
            </div>
          </div>
          <div className="about-desc">
            <div className="about-span">
              <span>About Us</span>
            </div>
            <div className="about-head">
              <h1>Best HairCut Salone for Men</h1>
            </div>
            <div className="about-para">
              <p>
                Let your hairdressers do their amazing job. Trim the hair to get
                your desired look. Book appointment with us for your favorite
                hair Styles!
              </p>
            </div>
            <div className="about-btn">
              <button>Read more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

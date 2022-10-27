import React from "react";
import "./hero.css";
import IMg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="container">
        <div className="main-Hero">
          <div className="Hero-items">
            <div className="Hero-desc">
              <div>
                <span>Welcome To Choppers</span>
                <h2> Best Hair Salon For A Professional Look</h2>
                <p>
                  Choppers offers high performance customized facials to provide
                  you with visible results
                </p>
              </div>
              <div className="btn">
                <div className="Hero-btn">
                  <button>Book Now</button>
                </div>
                <div className="butn">
                  <button>All Services</button>
                </div>
              </div>
            </div>
            <div className="Hero-img">
              <img src={IMg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

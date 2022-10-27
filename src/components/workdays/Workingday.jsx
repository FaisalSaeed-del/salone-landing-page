import React from "react";
import "./workday.css";
import Work from "../../assets/images/work.png";

const Workingday = () => {
  return (
    <div>
      <section className="container">
        <div>
          <div className="working-container">
            <div className="working-img">
              <img src={Work} alt="" />
            </div>
            <div className="work-desc">
              <div className="work-text">
                {/* <h1>working</h1> */}
                <h2>WORKING DAYS</h2>
              </div>
              <div className="work-span">
                <span> We are open on all six days in a week</span>
              </div>
              <div className="work-timings">
                <div className="work-period">
                  <div className="work-day">
                    <span>Monday</span>
                  </div>
                  <div className="work-clock">
                    <span>9Am to 10Pm</span>
                  </div>
                </div>
                <div className="working-border"></div>
                <div className="work-period2">
                  <div className="work-day">
                    <span>Friday</span>
                  </div>
                  <div className="work-clock">
                    <span>9Am to 10Pm</span>
                  </div>
                </div>
                <div className="working-border"></div>
              </div>
              <div className="main-btn">
                <div className="work-btn">
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workingday;

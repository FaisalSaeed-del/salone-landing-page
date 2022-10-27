import React from "react";
import "./appointment.css";
import Call from "../../assets/images/call.svg";

const Appointment = () => {
  return (
    <div className="appointment-bg">
      <section className="container">
        <div className="appointment-items">
          <div className="appointment-desc">
            <div className="appointment-span">
              <span>Book Now</span>
            </div>
            <div className="appointment-head">
              <h1>Book your Appointment Online</h1>
            </div>
            <div className="appointment-para">
              <p>
                Get 10% Discount on your first hair cut by using our website.
              </p>
            </div>
            <div className="app-btn">
              <button>Book Appointment</button>
            </div>
          </div>
          <div className="contact-card">
            <div className="appointment-call">
              <div className="call-icon">
                <img src={Call} alt="call" />
              </div>
              <div className="contact">
                <span className="contact-text">Call Now</span> <br />
                <span className="cell">0300-xxxxxxx-xx</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

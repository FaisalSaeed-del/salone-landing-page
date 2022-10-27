import React from "react";
import "./testimonial.css";
import T1 from "../../assets/images/client1.png";
import T2 from "../../assets/images/client2.png";
import { BsFillStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div>
      <section className="container">
        <div className="main-testimonial">
          <div className="testimonial-items">
            <div className="testimonial-span">
              <span>Testimonial</span>
            </div>
            <div className="testimonial-head">
              <h1>What Our Clients Say About Us</h1>
            </div>
            <div className="testimonail-para">
              <p>
                Let your hairdressers do their amazing job. Trim the hair to get
                your desired look. Book appointment with us for your favorite
                hair Styles!
              </p>
            </div>
            <div className="testimonial-btn">
              <button>Give Reviews</button>
            </div>
          </div>
          <div className="main-clients">
            <div className="client1">
              <div className="clinet-img">
                <img src={T1} alt="client-1" />
              </div>
              <div className="client-para">
                <p>
                  It was an amazing experience to get services from the best in
                  its profession Absolutly Enjoyed Every SEcond of it{" "}
                </p>
              </div>
              <div className="client-icon">
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
              </div>
              <div className="clinet-name">
                <h3>Fasial Saeed</h3>
              </div>
              <div className="client-span">
                <span> Regular user</span>
              </div>
            </div>
            <div className="client1">
              <div className="clinet-img">
                <img src={T2} alt="client-1" />
              </div>
              <div className="client-para">
                <p>
                  It was an amazing experience to get services from the best in
                  its profession Absolutly Enjoyed Every SEcond of it{" "}
                </p>
              </div>
              <div className="client-icon">
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
                <span>
                  <BsFillStarFill />
                </span>
              </div>
              <div className="clinet-name">
                <h3>Usama Munir</h3>
              </div>
              <div className="client-span">
                <span> Regular user</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

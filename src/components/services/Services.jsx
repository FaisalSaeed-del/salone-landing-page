import React, { useState } from "react";
import "./services.css";
import B1 from "../../assets/images/client1.png";
import { Flipper, Flipped } from "react-flip-toolkit";
import B2 from "../../assets/images/work.png";
import B3 from "../../assets/images/about3.png";

const Services = () => {
  // **********************   Dynamic Data ******************88//
  const [brands, setBrands] = useState({
    id: "1",
    span: "Hair Clean",
    span2: "Best Facial Hair Trim at Home Treamtment",
    Image: B1,
    Image2: B2,
    para: "your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!",
  });

  //************************************ */ Mapping ****************************************//

  const Branddata = [
    {
      id: "1",
      Image: B1,
      Image2: B2,
      span2: "Best Facial Hair Trim at Home Treamtment",

      span: "Hair Clean",
      para: " My hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!",
    },
    {
      id: "2",
      Image: B1,
      Image2: B2,
      span2: "Best Facial Hair Trim at Home Treamtment",
      span: "Hair Clean",
      para: "hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!",
    },
    {
      id: "3",
      Image: B1,
      Image2: B2,
      span2: "Best Facial Hair Trim at Home Treamtment",

      span: "Hair Clean",
      para: " Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!",
    },
    {
      id: "4",
      Image: B1,
      Image2: B2,
      span2: "Best Facial Trim at Home Treamtment",

      span: "Hair Clean",
      para: "That's your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!",
    },
  ];
  // **************** Hover Effect *************
  const Mouseover = (detail, id) => {
    setBrands({
      id: detail.id,
      Image: detail.Image2,
      para: detail.para,
      span2: detail.span2,
    });
    setActiveCard(detail.id);
  };
  const [activeCard, setActiveCard] = useState();

  return (
    <div>
      <section className="container">
        <div className="main-services">
          <div className="services-items">
            <div className="service-span">
              <span>Our Services</span>
            </div>
            <div className="service-head">
              <h1>
                Popular Hair Cutting <br /> and Hair Salone
              </h1>
            </div>
          </div>
        </div>
        {/* Servicces Section ****************************/}

        <div className="services-list">
          <Flipper flipKey={activeCard} spring="nowobbly">
            <div className="services-menu">
              {Branddata.map((detail, id) => {
                return (
                  <Flipped flipId="square">
                    <div className="service">
                      <div>
                        <img
                          src={detail.Image}
                          onMouseOver={() => Mouseover(detail, id)}
                          alt=""
                        />
                      </div>
                      <div>
                        <span>{detail.span}</span>
                      </div>
                    </div>
                  </Flipped>
                );
              })}
            </div>
          </Flipper>
        </div>

        {/* Details Section */}

        <div className="detail-type">
          <div className="detail-desc">
            <div className="detail-img">
              {" "}
              <img src={brands.Image} alt="" />
            </div>
            <div className="detail-text">
              <h1>{brands.span2}</h1>
              <div className="detail-para">
                <p>{brands.para}</p>
              </div>
              <div className="detail-button">
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

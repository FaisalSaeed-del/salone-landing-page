import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo.svg";
import { FaGreaterThan } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-bg">
      <section className="container">
        <div className="main-footer">
          <div className="footer-start">
            <div className="footer-logo">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div>
                <span>Salon</span>
              </div>
            </div>
            <div className="footer-text">
              <div className="footer-span">
                <span>Ready to get started </span>
              </div>
              <div className="footer-btn">
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-latter">
            <div className="latter-text">
              <h2>Subscribe to our newsletter</h2>
            </div>
            <div className="foo-btn">
              <div className="foo-input">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="foo-icon">
                <button>
                  <FaGreaterThan />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-items">
            <div className="footer-links">
              <div className="foo-head">
                <h3>Services</h3>
              </div>
              <div className="foo-span">
                <span>Email Marketing</span>
              </div>
              <div className="foo-span">
                <span>Campaigns</span>
              </div>
              <div className="foo-span">
                <span>Branding</span>
              </div>
              <div className="foo-span">
                <span>Offline</span>
              </div>
            </div>
            <div className="footer-links">
              <div className="foo-head">
                <h3>About</h3>
              </div>
              <div className="foo-span">
                <span>Our Story</span>
              </div>
              <div className="foo-span">
                <span>Benefits</span>
              </div>
              <div className="foo-span">
                <span>Team</span>
              </div>
              <div className="foo-span">
                <span>Career</span>
              </div>
            </div>
            <div className="footer-links">
              <div className="foo-head">
                <h3>Help</h3>
              </div>
              <div className="foo-span">
                <span>FAQ's</span>
              </div>
              <div className="foo-span">
                <span>Contact US</span>
              </div>
              <div className="foo-span">
                <span>Campaigns</span>
              </div>
              <div className="foo-span">
                <span>Branding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-reserved">
          <div className="footer-policy">
            <div>
              <span>Footer Policy</span>
            </div>
            <div>
              <span>Footer Policy</span>
            </div>
          </div>
          <div className="footer-social">
            <div>
              <a href="">
                <FaFacebookF />
              </a>
            </div>
            <div>
              <a href="">
                <GrInstagram />
              </a>
            </div>
            <div>
              <a href="">
                <GrTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

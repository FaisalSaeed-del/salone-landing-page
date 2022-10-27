import "./header.css";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header-bg">
      <section className="container">
        <nav className="main-nav">
          <div className="nav-img">
            <img src={Logo} alt="Salone" />
          </div>
          <div className="nav-items">
            <ul className="list">
              <li className="items">
                <a href="#">Home</a>
              </li>
              <li className="items">
                <a href="#">About us</a>
              </li>
              <li className="items">
                <a href="#">Services</a>
              </li>
              <li className="items">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="Header-btn">
            <button>Book Now</button>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;

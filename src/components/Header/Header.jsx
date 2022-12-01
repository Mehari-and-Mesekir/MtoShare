import React, {useState} from 'react'
import './Header.css';
import Bars from "../../assets/bars.png";
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
const [menuOpened, setMenuOpened]=useState(false);
  return (
    <div className="header">
      <span className="stroke-text">MtoShare </span>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            bachgroundColor: "var(--appColor)",
            padding: "0.5rem",
            boarderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              span={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              span={true}
              smooth={true}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
 
export default Header;
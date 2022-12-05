import React, { useState } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";
import "./Hero.css";
// import NumberCounter from "number-counter";
import About from "../About/About";
import Contact from "../Contact/Contact";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header></Header>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Here </span>
            <span>You Can Post Your </span>
            <span className="stroke-text">Videos & </span>
            <span>Articles </span>
          </div>
          <div>
            <span>AND GET</span>
            <span className="stroke-text">PAID </span>
          </div>
          <div>
            <span>Videos and Articles posted by our customers.</span>
          </div>
        </div>
        {/* hero buttons */}
        <About></About>
        <Contact />
      </div>
      <div className="right-h">
        <button className="btn">
          <NavLink
            onClick={() => setMenuOpened(false)}
            to="post"
            span={true}
            smooth={true}
          >
            Post Content
          </NavLink>
        </button>
        {/* calories */}
      </div>
    </div>
  );
};

export default Hero;

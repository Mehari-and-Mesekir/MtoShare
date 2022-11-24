import React, { useState } from "react";
import Header from "../Header/Header";

import { Link } from "react-scroll";
import "./Hero.css";
import NumberCounter from "number-counter";
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
            <span>
              Click the button below to see videos and articles posted by our
              customers.
            </span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Videos</buttons>
          <buttons className="btn">Articles</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link
            onClick={() => setMenuOpened(false)}
            to="post"
            span={true}
            smooth={true}
          >
            Post Content
          </Link>
          
        </button>
        {/* calories */}
      </div>
    </div>
  );
};

export default Hero;

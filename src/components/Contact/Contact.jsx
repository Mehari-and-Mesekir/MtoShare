import React from 'react'
import { FaFacebook, FaYoutube, FaTelegram, FaInstagram, FaMailBulk } from "react-icons/fa";
import './Contact.css'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <ul className="contact-menu">
        <li>
          <Link>
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link>
            <FaYoutube />
          </Link>
        </li>
        <li>
          <Link>
            <FaTelegram />
          </Link>
        </li>
        <li>
          <Link>
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link>
            <FaMailBulk />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Contact
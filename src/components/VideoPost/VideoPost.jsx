import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './VideoPost.css';

const VideoPost = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    const handleText = (e) => {
      setText(e.target.value);
    };
  return (
    <div className="video" id="video">
      <div className="middle-p">
        <span className="stroke-texttt">
          {"  "}
          Posting Video{" "}
        </span>
        <form>
          <br />
          <div className="email-container">
            <input type="email" value={email} placeholder="Email" required />
          </div>
          {/*when user write in name input box , handleChange()
              function will be called. */}
          <br />
          <div className="video-container">
            <input type="file" required />
          </div>
          <br />
          <div className="email-container">
            <textarea
              value={text}
              placeholder="Article or Discription"
              required
              onChange={(e) => {
                handleText(e);
              }}
            />
          </div>
          <br />
          {/*when user write in age input box , handleAgeChange()
               function will be called. */}
          <br />
          <br />
          <div className="hero-buttons">
            <button className="btn">Post</button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
        </form>
      </div>
    </div>
  );
}

export default VideoPost

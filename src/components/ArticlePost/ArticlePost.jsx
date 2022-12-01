import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ArticlePost = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    const handleText = (e) => {
      setText(e.target.value);
    };
  return (
    <div className="article" id="article">
      <div className="middle-p">
        <span className="stroke-texttt">
          {"  "}
          Posting Article{" "}
        </span>
        <form>
          <br />

          {/*when user write in name input box , handleChange()
              function will be called. */}
          <br />
          <div className="email-container">
            <input type="email" value={email} placeholder="Email" required />
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
          <br />
          <br />
          <br />
          <br />
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
        </form>
      </div>
    </div>
  );
}

export default ArticlePost
import { React, useState } from "react";
import './Post.css';
import { ReactDOM } from 'react-dom'
import { NavLink } from "react-router-dom";

const Post = () => {
  
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');
    const [email , setEmail] = useState('');
    const [file, setFile] = useState("");
    const [text, setText] = useState("");
    const [choose, setChoose]= useState('');

    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const [video, setVideo] = useState('');
    
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleChoose = (e) => {
      setChoose(e.target.value);
    };
    // function to update state of age with value
    // enter by user in form
    const handlePhoneChange =(e)=>{
      setPhone(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleFile = (e) => {
      setFile(e.target.value);
    };
    const handleText = (e) => {
      setText(e.target.value);
    };
    const handleVideo=(e)=>{
      setVideo()
    }
      // function to update state of password with
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
        '" ,Phone :"'+phone +'" and Email :"' + email + ' "fielname:" ' + file +'" discription: "'+ text +'"');
      }
      e.preventDefault();
    }
  return (
    <div className="post" id="post">
      <div className="back">
        <NavLink to="/" className="btn">
          Back
        </NavLink>
      </div>
      <div className="middle-p">
        <span className="stroke-texttt">
          {"  "}
          To Post First Fill The Following Form{" "}
        </span>
        <form>
          {/*when user submit the form , handleSubmit()
        function will be called .*/}

          <br />
          <div className="email-container">
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <br />
          <div className="email-container">
            <input
              type="number"
              value={phone}
              placeholder="940539857"
              required
              onChange={(e) => {
                handlePhoneChange(e);
              }}
            />
          </div>

          <br />

          {/*when user write in name input box , handleChange()
              function will be called. */}

          <div className="email-container">
            <input
              type="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
          </div>
          <br />
          {/* <div className="email-container">
            <input
              type="file"
              value={file}
              required
              onChange={(e) => {
                handleFile(e);
              }}
            />
          </div> */}

          <br />
          {/* <div className="email-container">
            <textarea
              value={text}
              placeholder="Article or Discription"
              required
              onChange={(e) => {
                handleText(e);
              }}
            />
          </div> */}

          <br />
          <div className="email-container">
            <label htmlFor="video">Video: </label>
            <input
              type="radio"
              name="choose"
              id="video"
              value='video'
              onChange={(e) => {
                handleChoose(e);
              }}
            />
            <label htmlFor="article">Article: </label>
            <input
              type="radio"
              name="choose"
              id="article"
              value='article'
              onChange={(e) => {
                handleChoose(e);
              }}
            />
          </div>

          {/*when user write in age input box , handleAgeChange()
               function will be called. */}
          <br />

          <br />
          <div className="hero-buttons">
            <button className="btn">
              <NavLink 
              to={choose}
              span={true} 
              smooth={true}>
                Next
              </NavLink>
            </button>
          </div>
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

export default Post
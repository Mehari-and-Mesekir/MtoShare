import { React, useState } from "react";
import './Post.css';
import { ReactDOM } from 'react-dom'
const Post = () => {
  
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
 
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value
    // enter by user in form
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
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
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
    }
  return (
    <div className="post" id="post">
      <div className="middle-p">
        <span className="stroke-texttt"> To Post First Fill The Following Form </span>
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
              type="text"
              value={age}
              placeholder="Age"
              required
              onChange={(e) => {
                handleAgeChange(e);
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
          {/*when user write in age input box , handleAgeChange()
               function will be called. */}
          <br />

          <br />
          <div className="hero-buttons">
            <buttons className="btn">Videos</buttons>
            <buttons className="btn">Articles</buttons>
          </div>
          <br />
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}

          <button className="btn btn-j">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Post
import React from 'react'
import './About.css';
// import hero_image_back from "../../assets/upload-icon-png-3.png";
const About = () => {
  return (
    <div className="about">
      <div className="left-a">
        <div className='image'>
          <img src={hero_image_back} alt="" />
        </div>
      </div>
      <div className="right-a">
        <div className="description">
          <h2>All you need to know</h2>
          <p>
            We are here to help you become the greatest content creator, article
            writer. By just uploading your videos and articles to out platform
            you will be paid based on the engagemnt your video or article
            recives from all of our social media accounts. Currently we are
            working in Ethiopia but we have the vision of expanding to other
            African countries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
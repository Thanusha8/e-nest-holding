import React from 'react'
import AboutBackgroundImage from "../assets/home-about-image-1.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'id="About">


        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading"> Buying a home means buying a lifestyle</h1>
            <p className="primary-text">
            We specialize in providing affordable, quality homes and land. 
            Our mission is to help you find the perfect 
            property that fits both your lifestyle and budget, with a 
            focus on value and sustainability.
            </p>
            <p className="primary-text">
            From residential homes to spacious plots,
             we make owning your dream property accessible 
             and resourceful.

            </p>

            <div className="about-buttons-container">
                <a href='https://www.chase.com/personal/mortgage/education/buying-a-home/find-perfect-home'><button className="secondary-button">Learn more</button></a>
                <a href='https://youtube.com/shorts/TrGtJPPrNNI?si=G85Hc-5dL6LeXZnU'><buton className="watch-video-button"><BsFillPlayCircleFill /> watch Video</buton></a>
            </div>

        </div>

        <div className="about-section-image-container slide-in">
            <img src={AboutBackgroundImage} ></img>
        </div>


      
    </div>
  )
}

export default About

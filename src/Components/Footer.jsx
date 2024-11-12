import React from 'react'
import logo from "../assets/logo.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-wrapper">
        
            

        <div className="footer-section-two">

        <div className="footer-section-columns">

            <div className="footer-logo-container">
                <img src={logo}></img>
            </div>
            <div className="footer-icons">
              <a href="https://www.facebook.com/share/j2q3Mmhcj4Uq5gTX/?mibextid=LQQJ4d"><FaFacebookF /></a>
              <a href='https://www.linkedin.com/in/edward-mallawarachchii-94b8a572?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><SiLinkedin /></a>
              <a href='mailto:enestholdingscogmail.com'><BiLogoGmail /></a>
               
             </div>
             </div>
        
            <div className="footer-section-columns">
              <h3>Connect With Us</h3>
              <span>120/1,</span>
              <span>Jayasuriya Road,</span>
              <span>Nadurupitiya,</span>
              <span>Kandana.</span>
            </div>
        

        <div className="footer-section-columns">
          <h3>Quick Links</h3>
        <span><a href='#Home'>Home</a></span>
          <span><a href='#About'>About</a></span>
          <span><a href='#projects'>Projects</a></span>
          <span><a href='#Contact'>Contact</a></span>
        </div>

        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import Navbar from './Navbar'
import BannerImage2 from '../assets/home3.jpg';
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className='home-container' id="Home">
        <Navbar/>


            <div className='home-content-section'>

               <div className='home-image-selection'>
                   <img src={BannerImage2}></img>
                      <div className='overlay-text-conetnt'>
                        <h1 className='home-heading fade-in'>
                        Welcome Home
                        </h1>
                        <p className='home-text fade-in'>
                        Home is where your story begins.
                         We’re here to help you find the perfect place to write it.
                        </p>
                        <a href='mailto:enestholdingscogmail.com'><button className='secondary-button fade-in'>
                            Get Started <FiArrowRight/>
                        </button></a>
                      </div>
               </div>
               
           </div>
    
    </div>
  )
}

export default Home

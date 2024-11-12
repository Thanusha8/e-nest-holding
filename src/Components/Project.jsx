import React from 'react'
import Project1 from "../assets/project-image.jpg";




const Project = () => {
  return (
    <div  className="work-section-wrapper"id="projects">
      <div className="work-section-top">
        <p className="primary-subheading">Projects</p>
        <h1 className="primary-heading">Our Completed Works</h1>
        <p className="primary-text">
        These completed projects are more than just buildings; they’re homes filled with love and memories.
         We’re proud to have brought these dreams to life.
        </p>
      </div>

      <div className="project-section-bottom">
        <img src={Project1}></img>
        

      </div>
    </div>
  );
}

export default Project

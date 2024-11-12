import React from 'react'
import work1 from "../Assets/work-section1.jpg";
import work2 from "../Assets/work-section2.jpg";
import work3 from "../Assets/work-section3.jpg";


const Work = () => {


    const workInfodata =[
        {
            image: work1,
            title: "Consultation and Customization",
            text: "We start by understanding your vision and needs, ensuring your dream home fits your lifestyle perfectly",   
        },

        {
            image: work2,
            title: "Design and Planning",
            text: "Our talented team will create customized designs that reflect your personal style while staying within your budget",   
        },
        {
            image: work3,
            title: "Construction and Delivery",
            text: "We build your home with quality craftsmanship, ensuring timely delivery and your complete satisfaction",   
        },
    ];

  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading"> Work</p>
            <h1 className="primary-heading">Our Process</h1>
            <p className="primary-text">
            At our construction company, we prioritize your vision,
             guiding you through every step to create your perfect home
            </p>
        </div>

        <div className="work-section-bottom">
        {workInfodata.map((data)=>(
            <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                    <img src={data.image} alter=""></img>
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
            
        ))}
            
        </div>
      
    </div>
  )
}

export default Work

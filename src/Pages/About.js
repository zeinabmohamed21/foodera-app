import React from "react";
import './About.css';
import AboutImage from'../Assets/about page.jpg'
const About =()=>{
    return(
        <div className="about  ">
         <div className=" container">
            <div className="row"> 
                <div className="col-lg-8">
                    <div className="img">
                    <img src={AboutImage}     className="about-image img-fluid" />
                    </div>
                 
                </div>
                <div className="col-lg-4 mt-5">
                   <h3>We pride ourselves on<br/> making real food from the <br/>best ingredients.</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
                   <button>Learn More !</button>
                </div>

            </div>
         </div>
        </div>
    )
}
export default About;
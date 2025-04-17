import React from "react";
import './Explore.css'
import Data from "../Data";

const ExploreFood =()=>{
    const BlogItem= Data.map((item)=>{
        return(
            <div className="col-lg-4 ">
                <div className="box">
                   <img src={item.img}  />
                   <h4>{item.title}</h4>
                   <span>{item.time}</span>
                   <h5>{item.price}</h5>
                </div>
                <button>Order Now</button>
             </div>
        )
    })
    return(
        <>
        <section className="blogs"> 
            <div className="container">
                <h2>Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus 
                    a odio finibus bibendum in sit amet <br/>leo. Mauris feugiat erat tellus. Far far away, 
                    behind the word mountains, far from the countries Vokalia and<br/> Consonantia,
                     there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div className="row exImages">
                     {BlogItem}
                </div>


            </div>
        </section>
        </>
    )
}

export default ExploreFood
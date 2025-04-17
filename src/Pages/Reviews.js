import React from "react";
import './Reviews.css';
import item1 from '../Assets/item1.jpg' ;
import item2 from '../Assets/item2.jpg';

const Reviews =()=>{
    return(
        <>
        <section className="reviews">
            <h2>Testimonials</h2>
            <div className="container slider">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={item1} class=" " alt="..."/>
      <div class="carousel-caption pt-5  d-md-block">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <h3>Maccy Doe -Front end</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src={item2} class=" " alt="..."/>
      <div class="carousel-caption   d-md-block">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <h3>Joun Doe -UX Developer</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src={item1} class=" " alt="..."/>
      <div class="carousel-caption   d-md-block">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
        <h3>Maccy Doe -Front end</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
               
             </div>  
        </section>
        </>
    )
}

export default Reviews;
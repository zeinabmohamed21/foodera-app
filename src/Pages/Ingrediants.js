import React from "react";
import './Ingrediants.css';
import FoodIngred from'../Assets/four food.png'


const Ingred =()=>{
    return(
        <>
        <section className="ingrediants  ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text">
                      <h2>We make everything by hand<br/> with the best possible <br/>ingredients.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio 
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away,
                         behind the word mountains, far from the countries Vokalia and Consonantia,
                          there live the blind texts</p>
                    
                          <ul class="list-unstyled check-list">
                           <li>Etiam sed dolor ac diam volutpat.</li>
                           <li>Erat volutpat aliquet imperdiet.</li>
                           <li>purus a odio finibus bibendum.</li>
                      </ul>
                     <button>Learn More!</button>
                    </div>
                    <div className="col-md-6 images">
                        <img src={FoodIngred} width="700px" className="img-fluid"/>
                        
                    </div>

                </div>
            </div>

        </section>
        </>
    )
}
export default Ingred;
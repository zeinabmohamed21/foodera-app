import React from "react";
import'./Home.css'
import Home_page from'./../Assets/home image2.jpg'
const Home =()=>{
    return(
        <>
        <header>
            <div className="container ">
            <div className="row">
            <div className="col-lg-6 home-info">
                <h2>
                Good food choices <br/>are good<br/> investments.
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.
                </p>
                <button className="btn-1">Order now</button>
                <button className="btn-2">Learn more !</button>

            </div>
            <div className="col-lg-6">
                
            </div>

         </div>
            </div>
         
        </header>
        <section className="numbers">
             <div className="container">
             <div className="row">
                <div className="col-md-3  text">
                    <h2>1287+</h2>
                    <p>SAVINGS</p>
                </div>
                <div className="col-md-3 text">
                    <h2>5786+</h2>
                    <p>PHOTOS</p>
                </div>
                <div className="col-md-3   text">
                    <h2>1440+</h2>
                    <p>ROCKETS</p>
                </div>
                <div className="col-md-3   text">
                    <h2>7110+</h2>
                    <p>GLOBES</p>
                </div>

            </div>
             </div>
         </section>
         
        </>
        
    )
}
export default Home ;
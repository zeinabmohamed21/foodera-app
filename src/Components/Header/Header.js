import React from "react";
import'./Header.css'
 import Logo from './../../Assets/logo.png'

const Header=()=>{
    return(
        <>
           <nav class="navbar navbar-expand-lg   fixed-top   ">
           <a class="navbar-brand" href="#"> 
            <img src={Logo}/>
           </a>
   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
       
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Explore Food</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reviews</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ's</a>
      </li>
      
    </ul>
    
    <button>1800 789 123</button>
  </div>
</nav>
        </>
    )
}
export default Header;
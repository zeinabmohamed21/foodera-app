import React from "react";
import './Footer.css';

const Footer= ()=>{
    return(
        <section className="footer">
            <footer class="bg-body-tertiary text-center">
   
  <div class="container-fluid p-4 pb-0">
     
    <section class="">
      <form action="">
        
        <div class="row d-flex justify-content-center">
           
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
           

           
          <div class="col-md-5 col-12">
             
          <div class="form-group">
    <label for="email"> </label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"></input>
  </div>
          </div>
          

           
          <div class="col-auto">
             
            <button data-mdb-ripple-init type="submit" class="btn btn-dark mb-4">
              Subscribe
            </button>
          </div>
           
        </div>
         
      </form>
    </section>
     
  </div>
  

   
  <div class="text-center p-3 text-light" style={{backgroundColor:'#531b28'}}>
    © 2025 Copyright : 
     <a class="  text-light" href="https://mdbootstrap.com/"> Foodera.com</a>
  </div>
   
</footer>
        </section>
    )
}

export default Footer;
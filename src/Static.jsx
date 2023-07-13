import React from "react";
import './Staticdesign.css';

export function Navbar(){
    return(
        
        <nav className="navbar navbar-expand-lg py-4 p-0 " >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn " type="submit">Search</button>
              </form>
              
            </div>
          </div>
        </nav>
        
        )
        }
    
    export function Footer(){

    return(
        <div className="footer mt-2 py-3 px-3">
          <div className="d-flex">
            <div className="col-md-3 info my-5">
              <h5>OUR INFORMATION</h5>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 my-5 info">
              <h5>HELP CENTRE</h5>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Term and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 my-5">
              <h5>CORPORATE OFFICE:</h5>
              <p>Flipkart Internet Private Limited,<br/>
    
                Buildings Alyssa, Begonia &<br/>
    
                Clove Embassy Tech Village,<br/>
    
                Outer Ring Road, Devarabeesanahalli Village,<br/>
    
                Bengaluru, 560103,<br/>
    
                Karnataka, India <br/>
              </p>
            </div>
    
            <div className="col-md-3 my-5">
              <h5>REGISTERED ADDRESS:</h5>
              <p>Flipkart Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &<br/>
                Clove Embassy Tech Village,<br/>
                Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103,<br/>
                Karnataka, India<br/>
                CIN : U51109KA2012PTC066107<br/>
                Telephone: 044-45614700<br/>
              </p>
            </div>
          </div>
        </div>
    )
}

export function Mobile(props){
    return(
        <div className="col-md-3 mt-4 p-3 product text-center">
            <img src={props.img} alt=".." className="img-fluid" />
            <h2>{props.h2}</h2>
            <p>{props.price}</p>
            <p>{props.discount}</p>
        </div>
    )
}
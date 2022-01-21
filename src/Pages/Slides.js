import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Co1 from './co1.jpeg'
import Co2 from './co2.png'
import Co3 from './co3.png'


export default function Slides() {
  return(
    <div className='container' style={{marginTop:'5px',marginBottom:'7px' , width:"auto", height:'600px'}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{border:'2px solid rgba(116,189,232,0.9948354341736695)'}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Co1}  className="d-block w-100" alt="three" style={{ width:"auto", height:'600px'}} />
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={Co2} className="d-block w-100" alt="one" style={{ width:"auto", height:'600px'}}/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src={Co3}  className="d-block w-100" alt="two" style={{ width:"auto", height:'600px'}}/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  ) 
}

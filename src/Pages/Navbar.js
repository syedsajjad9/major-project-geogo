import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '@material-ui/core'
import Nav from './nav.png'
import Logo from './logo.png'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{backgroundColor:'rgba(72,139,179,0.34217436974789917)' }}>
        <div className="container-fluid">
        <Link className="navbar-brand" style={{width:'auto', display:'flex',fontFamily:'fantasy',fontWeight:'bold',}} to="/" ><img src={Logo}  alt="one" style={{ width:"40px", height:'40px',margin:'2px',paddingRight:'2px',}}/><h1>CoWIN </h1></Link>
          {/* <a className="navbar-brand" href="#" >{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={Nav} className="d-block w-100" alt="one" style={{ width:"20px", height:'20px'}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontWeight:'bold'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pincode">Pincode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/district">States/districts</Link>
              </li>
              
            </ul>
          
            
              <button className="btn btn-outline-primay" type="submit" style={{border:'2px solid rgba(0,147,233,0.3287037037037037)',}}> <a href="https://www.cowin.gov.in/"  target="_blank" rel="noreferrer" style={{textDecoration:'none',fontWeight:"bold",color:'black'}}> More Details About CoWIN </a></button>
           

     
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes={title: PropTypes.string.isRequired,
                  aboutText:PropTypes.string.isRequired
                }
// Navbar.defaultProps={
//                     title:'set the value',
//                   aboutText:'set the about'
//                 }
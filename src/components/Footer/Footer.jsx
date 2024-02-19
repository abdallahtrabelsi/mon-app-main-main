import React from "react";
import "./footer.css";
// import {FaIcons}from 'react-icons/fa';
import "font-awesome/css/font-awesome.css";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/SINCE-2015.png"
// import { Newsletter } from "../Newsletter";


const Footer = () => {
  return (
    <>
    
    {/* <Newsletter/> */}
    <section className="ff">
    <footer className="footer">
      <div className="container1">
        <div className="row1">
          <div className="footer-col">
           
            <h1 className="log">
              <img className="img" src={logo2} alt="LOGO2" />
              </h1>
               <div className="social-links">
                <ul className="footul">
                <li className="ll">
                
                      <i className="fa fa-phone-square" Style="font-size:19px"></i> 
                      : (216) 29 661 671
                </li>
                 
                
                <li className="ll">
                  
                   <i className="fa fa-envelope" Style="font-size:17px" ></i>  : Contact@cosmos-tn.com
                </li>
                
                <li className="ll">
                    
                   <i className="fa fa-home" Style="font-size:19px"></i>   : Avenue Majida Boulila,Al TAWFIK Building <br/>      
                   <p className="lolop">
                     5<sup>th</sup> floor N°53 
                                
                  3003 Sfax - Tunisia
                </p>
                </li>
                
               
                </ul>
              </div>
           
            
          </div>
          <div className="footer-col">
            
            <h4 ><Link to="/" className="footnav">Home</Link></h4>
            <h4 ><Link to="/About" className="footnav" >About Us</Link></h4>
            <h4 ><Link to="/Service"  className="footnav">Our Services</Link></h4>
           
          </div>

        
          <div className="footer-col">
           <h4 ><Link to="/Strategie" className="footnav" >Strategic Development</Link></h4>
            <ul className="footul">
              <li className="footer-li">
                <Link to="/Planing" className="footnav">Strategic Planning</Link>
              </li>
              <li  className="footer-li">
                <Link to="/Operation" className="footnav">Operational Execution</Link>
              </li>
              <li className="footer-li">
                <Link to="Analytics" className="footnav">Analytics & Reporting</Link>
              </li>
              {/* <li>
                <Link to="">Shoes</Link>
              </li> */}
            </ul>
          </div>
           <div className="footer-col">
           <h4 ><Link to="/create" className="footnav">Creative Development</Link></h4>
            <ul className="footul">
              <li className="footer-li">
                <Link to="/Design" className="footnav">Graphic Design & Content Creation</Link>
              </li>
              <li className="footer-li">
                <Link to="/Web" className="footnav">Web and Digital Design</Link>
              </li>
              <li className="footer-li">
                <Link to="/Event" className="footnav">Event and Exhibition Design</Link>
              </li>
              {/* <li>
                <Link to="">Shoes</Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow US</h4>
            <div className="social-links">
              <Link to="" className="footnav">
                <i className="fa fa-facebook"></i>
              </Link>
              {/* <Link to="">
                <i className="fa fa-instagram"></i>
              </Link> */}
              <Link to="" className="footnav">
                <i className="fa fa-linkedin"></i>
              </Link>
              {/* <Link to="">
                <i className="fa fa-twitter"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-col1">
        <img src={img1} alt="hello" className="img1"/>
       
      </div>
      <div className="footer-col1">
       
        Copyright © 2023 Cosmos Notwork. All Rights Reserved
      </div>
    </footer>
    </section>
    </>
  );
};

export default Footer;

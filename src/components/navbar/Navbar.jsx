import React from "react";

// import { useState, useEffect } from "react";
import "./navbar.scss";
import logo2 from "./logo2.png";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { menuItems } from "../../menuitems";
// import MenuItems from "./MenuItems";


const navbar = Navbar;




function Navbar() {

//   const [t,i18n]=useTranslation();
// const handleLanguageChange = (e) => {
//     const newLang = e.target.value;
//     i18n.changeLanguage(newLang);}


  // const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 1) {
  //     if (!isNavbarFixed) setIsNavbarFixed(true);
  //   } else {
  //     if (isNavbarFixed) setIsNavbarFixed(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isNavbarFixed]);

  // const [active, setActive] = useState("nav__menu");
  // const [icon, setIcon] = useState("nav__toggler");
  // const navToggle = () => {
  //   if (active === "nav__menu") {
  //     setActive("nav__menu nav__active");
  //   } else setActive("nav__menu");

  //   // Icon Toggler
  //   if (icon === "nav__toggler") {
  //     setIcon("nav__toggler toggle");
  //   } else setIcon("nav__toggler");
  // };




  
// dropdownmenu
  
  
  return (




<nav className="navbarnavi blurryscroll" >

  <label for="drop" className="toggle">&#8801; </label>
  <Link to="/"><img src={logo2} alt="logo" className="logo-nav" /></Link>
  <input type="checkbox" id="drop" />
  
  <ul className="menu uli ulnav">
    
        <li className="linav"> 
    <li className="linav"><Link to="/" className="nava">Home</Link></li>
      {/* <label for="drop-1" className="toggle">About Us</label> */}
      <li className="linav"><Link to="/About" className="nava">About Us</Link></li>
      {/* <input type="checkbox" id="drop-1"/>
      <ul>
        <li className="linav"><Link to="#">Service 1</Link></li>
        <li className="linav"><Link to="#">Service 2</Link></li>
        <li className="linav"><Link to="#">Service 3</Link></li>
      </ul> */}
    </li>
    <li className="linav"> 
      
      
      {/* <label  className="toggle">Our Services</label> */}
      <li className="linav"><Link to="/Service" className="nava">Our Services</Link></li>
      {/* <input type="checkbox" id="drop-2"/>
      <ul>
        <li className="linav"><Link to="#">Portfolio 1</Link></li>
        <li className="linav"><Link to="#">Portfolio 2</Link></li>
        <li className="linav"> 
          
          
          <label for="drop-3" className="toggle">Works +</label>
          <Link to="#">Works</Link>
          <input type="checkbox" id="drop-3"/>
          <ul>
            <li className="linav"><Link to="#">HTML/CSS</Link></li>
            <li className="linav"><Link to="#">jQuery</Link></li>
            <li className="linav"><Link to="#">Python</Link></li>
          </ul>
        </li>
      </ul> */}
    </li>
      <li className="linav"> 
    
      {/* <label for="drop-1" className="toggle">Strategic Development</label> */}
      <Link to="/Strategie" className="nava">Strategic Development</Link>
      <input type="checkbox" id="drop-1"/>
      <ul className="ulnav">
        <li className="linav souli"><Link to="/Planing" className="nava">Strategic Planning</Link></li>
        <li className="linav souli"><Link to="/Operation" className="nava">Operational Execution</Link></li>
        <li className="linav souli"><Link to="/Analytics" className="nava">Analytics and Reporting</Link></li>
      </ul>
    </li>
      <li className="linav"> 
    
      {/* <label for="drop-2" className="toggle">Creative Development</label> */}
      <Link to="/create" className="nava">Creative Development</Link>
      <input type="checkbox" id="drop-2"/>
      <ul className="ulnav">
        <li className="linavli linav" ><Link to="/Branding" className="nava">Visual Identity and Branding</Link></li>
        <li  className="linavli linav"><Link to="/Design" className="nava">Graphic Design and Content Creation</Link></li>
        <li  className="linavli linav"><Link to="/Web" className="nava">Web and Digital Design</Link></li>
         <li className="linavli linav" ><Link to="/Event" className="nava">Event and Exhibition Design</Link></li>
      </ul>
    </li>
    
    <li className="linav"><Link to="/Contact" className="nava">Contact</Link></li>
  </ul>
</nav>












    // <div >
    // <nav classNameName={`navbar ${isNavbarFixed ? "navbar-fixed" : ""}`}>
    //   <Link to="/" classNameName="nav__brand">
    //     <img src={logo2} classNameName="imm" alt="cosmos"/>
    //   </Link>




    //   <ul classNameName={active}>
    //        {menuItems.map((menu, index) => {
    //       const depthLevel = 0;
    //       return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
    //     })}
        



    //      </ul>
    //  {/* <li className="linav">
    //   <select id={i18n.changeLanguage} onChange={handleLanguageChange} >
    //   <option value="en">EN</option>
    //   <option value="fr">FR</option>
    //   <option value="ar">AR</option>
    // </select>
    //  </li> */}
     
    //   <div onClick={navToggle} classNameName={icon}>
    //     <div classNameName="line1"></div>
    //     <div classNameName="line2"></div>
    //     <div classNameName="line3"></div>
    //   </div>
      
    // </nav>
    
  );
}
export default navbar;

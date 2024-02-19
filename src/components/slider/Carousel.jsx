import React, { useRef, useEffect } from "react";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { FaQuoteRight } from "react-icons/fa";
// import data from "./data";
// import TextTransition, { presets } from 'react-text-transition';

import "./slider.scss";
import video from "./ALALY480.webm";
import web from "./web.webm";





   



export  function Carousel() {
//   video auto play
 const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);
 


  
  
    return (
       
       

<section className="section">
    <div className="section-center-1"> 
    {/* <div className="elipsis"> */}
    {/* <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}
        </TextTransition> */}
       
      <span className="heo slide11">
      Designing Sucess Crafting Identity
      </span>
      
    
      <span className="heo slide22">
        Impactful Branding Measurable Results
      </span>
      
      <span className="heo slide33">
        Connecting Creativity and Strategy
      </span>
      
    <span className="heo slide44">
        Turning Ideas into Impact
      </span>
    
     <span className="heo slide55">
        turning visions into reality
      </span>
      {/* </div> */}
   
   
    
  

    
   
   

       
   


<div className="slideshow">
  
    <div className="slideshow-image imm4" >
       
    </div>
  <div className="slideshow-image " >
   
   <video
        
         resizemode={"cover"}
          style={{
            aspectRatio: 1,
            width: "100%",
          }} 

          autoPlay={true}
          loop={true}
          muted
          controls={true}
          playsInline={true}
          
          alt="All the devices"
          src={video}
          ref={videoEl}
        />
  </div>
  
  <div className="slideshow-image imm2" >

  </div>
  <div className="slideshow-image imm3" >
    
    <video
         playsInline={true}
          autoPlay={true}
          loop={true}
          muted
          playing={true}
          controls={true}
          
          alt="All the devices"
          src={web}
          ref={videoEl}
        />
  </div>
  <div className="slideshow-image imm6" >
   
  </div>
</div>

  
</div>
 </section> 

      
    );
}

export default Carousel;

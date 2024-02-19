import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./scene.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Canvas } from "@react-three/fiber";
import Brand from "./Brand";
import train from "./train.jpg"
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei"
// import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length -1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });


// setReplay
  const [replay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading11", text: "STRATEGIC DEVELOPEMENT" },
    {
      type: "heading2",
    
      text:"Strategic Planning",
     
    },
    {
      type: "heading2",
    
      text:"Operational Execution",
     
    },
      {
      type: "heading2",
    
      text:"Analytics and Reporting",
     
    }
      
  ];
   const placeholderText1 = [
    { type: "heading11",
     text: "CREATIVE DEVELOPEMENT" },
    {
      type: "heading2",
      text: "Visual Identity and Branding"

      
    },
    {
      type: "heading2",
      text: "Graphic Design and Content Creation"

      
    },
     {
      type: "heading2",
      text: "Web and Digital Design"

      
    },
      {
      type: "heading2",
      text: "Event and Exhibition Design"

      
    }

  ];
  const placeholderText3 = [
    { type: "heading11", text: "PLV & EVENTS" },
    {
      type: "heading2",text: "Event Theme and Booth Design"
    },
     {
      type: "heading2",text: "Event marketing materials"
    },
    {
      type: "heading2",text: "Exhibition Space Planning"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.045
      }
    }
  };

  // Quick and dirt for the example
  // const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };



  return (
    <section className="scen" ref={component}>
      <div className="firstContainer">
        
        <div className="first-row">
  <div className="first-column1 first-marg" >
    <h1 className="first-h1" >Green and smart mobility solutions</h1>
    <p >Tackling climate change and reducing greenhouse gas emissions requires a holistic review of how we live and travel. Rail is at the heart of sustainable mobility - there is simply no cleaner collective transportation system. In terms of energy efficiency per passenger kilometre, it is the most efficient mode of public transport, as well as the most effective.

Learn how our digitalisation of mobility is driving the transport transformation - making rail operations even more competitive.</p>
  </div>
  <div className="first-column1 ">
    <img src={train} alt="" className="img-first-train" />
  </div>
</div>
      </div>
      <div ref={slider} className="container">
        <div className="description panel blue   ">
{/* <div className="image-card perspective-left">
</div> */}
{/* animation 1 */}
<div className="scroll-">
          <motion.div  className="te"
          initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}>
        
            <div className="container2">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
        
            </div>
      </motion.div>
{/* <Canvas className="canva">
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Brand />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas> */}
      
              {/* <div className="arrow">
                
              </div> */}
            </div>
        </div>
        {/* animation2 */}
       
 <div className="description panel red   ">
{/* <div className="image-card perspective-left">
</div> */}
{/* animation 1 */}
<div className="scroll-">
          <motion.div  className="te"
          initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}>
        
            <div className="container2">
        {placeholderText1.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
            </div>

          
      </motion.div>
      
<Canvas className="canva">
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Brand />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      
              <div className="arrow">
                
              </div>
              
            </div>
          
       
        

        </div>
        {/* animation 3 */}
          <div className="description panel orange   ">
<div className="image-card perspective-left">
</div>
{/* animation 1 */}
<div className="scroll-">
          <motion.div  className="te"
          initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}>
        
            <div className="container2">
        {placeholderText3.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
            </div>

          
      </motion.div>
      
{/* <Canvas className="canva">
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Plv />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas> */}
      
              <div className="arrow">
                
              </div>
            </div>


        </div>
       
        {/* <div className="panel purple">THREE</div> */}
      </div>
      <div className="lastContainer">
     
           <div className="first-row1">

  

  <div className="first-column22 first-coll">
    <img src={train} alt="" className="img-last-train" />
  </div>
  <div className="first-column22 first-column1" >
    <h1  >Green and smart mobility solutions</h1>
    <p>Tackling climate change and reducing greenhouse gas emissions requires a holistic review of how we live and travel. Rail is at the heart of sustainable mobility - there is simply no cleaner collective transportation system. In terms of energy efficiency per passenger kilometre, it is the most efficient mode of public transport, as well as the most effective.

Learn how our digitalisation of mobility is driving the transport transformation - making rail operations even more competitive.</p>
  </div>

</div>
      
      </div>
    </section>
  );
}

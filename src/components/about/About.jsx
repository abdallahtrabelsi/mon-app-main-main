
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./About.css";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer"
import im from "./01.png";
import { ScrollAnimation } from "./ScrollAnimation";
  function About() {

    // , setReplay
  const [replay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Why Cosmos Network ?" },
    {
      type: "heading2",
      text: "Cosmos Network, cleverly named after the vast cosmos that stretches beyond our comprehension, signifies our agency's commitment to exploring uncharted opportunities and expanding the horizons of our customers' markets. Just as the universe remains largely unexplored, we understand that countless possibilities await discovery."
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
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
    <> <Navbar/>

    {/* ************************block1**************** */}
    <div className="About">
   <div className="row-about">
  <div className="column coll" >
    <h1 >WHY COSMOS NETWORK ?</h1>
    <p>Cosmos Network, cleverly named after the vast cosmos that stretches beyond 
      our comprehension, signifies our agency's commitment to exploring uncharted
       opportunities and expanding the horizons of our customers' markets. Just as 
       the universe remains 
      largely unexplored, we understand that countless possibilities await discovery.</p>
  </div>
  <div class="column coll2">
    <img src={im} alt="" className="immoo1" />
  </div>
</div>

{/* ****************block2************ */}
 <div className="row2">
  <div className="column coll2">
    <img src={im} alt="" className="immoo1" />
  </div>
  <div className="column coll" >
    <h1 >OUR MISSION?</h1>
    <p>To act as your cosmic partner, embarking on a journey of discovery and
      connection. Through our creative approach and strategies, we seamlessly
         bridge businesses and clients, bringing them together in a synergistic
       dance of growth and success. We're not just about providing services;
        we're about uncovering the best strategies, utilizing cutting-edge
        technologies, and navigating the cosmic landscape to ensure your
        brand shines brightly among the stars. Join us on this exciting cosmic
       journey, where the possibilities are as limitless as the cosmos itself..</p>
  </div>
  
</div>

</div>

<Footer/>
</>
  );
};export default About
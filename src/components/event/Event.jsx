import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import "./event.css";
// import grand from "./grand.jpg"

export default function Event() {
  return (<>
    <Navbar/>
    <div className="Event">
      <div className="event-head">
     <h1 className="h1-event">EVENT & EXHIBITION DESIGN</h1>
          </div>
          <div className="event-block1">
{/* <h1 className="h1plan">EVENT & EXHIBITION DESIGN</h1> */}
      <p className="p-event">Make your events unforgettable with our event and exhibition design services. We bring your visions to life, creating immersive experiences that captivate attendees. From thematic booth designs to engaging promotional materials, we handle every detail, ensuring your events leave a lasting impression. Trust us to elevate your event presence.
         </p>
          </div>


          {/* ************block3************** */}
         <div className="row-event">
  <div className="column-event col-event1" >
    <h2>Event Theme and Booth Design</h2>
    <p>Make a memorable impact at industry events with our expert event theme and booth design services. Our agency will work closely with you to create visually striking
       and immersive event experiences that leave a lasting impression on attendees..</p>
  </div>
  <div className="column-event col-event">
    <h2>Event Promotion Materials</h2>
    <p>Our agency can assist you in creating effective event promotion materials, including posters, banners, and social media graphics. With our expertise, we can ensure that your event marketing materials effectively convey
       your message and attract the right audience and create buzz around an event.</p>
  </div>
  <div className="column-event col-event1" >
    <h2>Exhibition Space Planning</h2>
    <p>Planning and maximizing your exhibition space is essential for creating an impactful display. Our agency can help you optimize your exhibition space, 
      taking into consideration factors such as flow, accessibility, and visual impact</p>
  </div>
</div>
<div className="event-4">
  {/* <img src={grand} alt="grand" className="immz" /> */}
</div>
     
    </div>

    <Footer/>
    </>
  );
}
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import "./web.css";
// import grand from "./grand.jpg"
export default function Web() {
  return (<>
    <Navbar/>
    <div className="Event">
      <div className="ddd1">
      <h1 className="h1plan1">WEB & DIGITAL DESIGN</h1>
      
          </div>
          <div className="ddp">
<p className="p-web">Your online presence matters, and our web and digital design team ensures 
it shines. We design user-friendly websites and captivating digital experiences that engage and 
convert visitors. Our responsive designs are tailored to your brand, providing a 
      seamless user journey. Elevate your online impact with our design expertise.
         </p>
          </div>
          <div className="row-web">
  <div className="column-web col-web" >
    <h2>Website Design and Development</h2>
    <p>A well-designed website is essential for establishing a strong online presence. Our agency specializes in creating visually appealing and user-friendly websites that not
       only impress visitors but also drive conversions and achieve your business goals.</p>
  </div>
  
  <div className="column-web col1-web" >
    <h2>Mobile App Design</h2>
    <p>With the increasing popularity of mobile apps, a well-designed product can differentiate your brand from the competition. Our team can help you create intuitive and visually appealing mobile
       app interfaces that provide seamless user interfaces (UI) and experiences (UX).</p>
  </div>
  
  <div className="column-web col1-web" >
    <h2>User Experience (UX) Design</h2>
    <p>UX design centers on enhancing the overall user experience by optimizing how users interact with a product or service. It involves creating intuitive and user-friendly
       interfaces by usability testing, user research, and interface design improvements.</p>
  </div>
  
  <div className="column-web col-web" >
    <h2>Interactive Media Design</h2>
    <p>Interactive media grabs attention and encourages engagement.Interactive media design involves creating engaging and interactive digital experiences, such as interactive websites, touchscreen kiosks, and multimedia 
      installations, that captivate your audience and create lasting impressions.</p>
  </div>
</div>
<div className="web-4" >
  
</div>
    </div>
    <Footer/>
    </>
  );
}
// import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard1 } from "./ProjectCard";
// import { Link } from "react-router-dom";
import projImg1 from "./stategic.png";
import projImg2 from "./operation.png";
import projImg3 from "./analytics.png";
import projImg4 from "./branding.png";
import projImg5 from "./design.png";
import projImg6 from "./web.png";
import projImg7 from "./event.png";
import servimage from "./service.jpg"
// import colorSharp2 from "./back.png";
import "animate.css";
import "./service.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer"
// import TrackVisibility from "react-on-screen";

export const Service = () => {
  const projects = [
    {
      // title: "Strategic Planning ",
      description: "Market Research and Analysis",
      description1: "Competitive Intelligence",
      description2: "Strategic Brand Growth Solution",
      description3: "Brand Strategy and Positioning",
      imgUrl: projImg1,
      more: "/Planing",
    },
    
    {
      // title: "Operational Execution",
      description: "Digital Marketing & Social Media Management",
      description1: "Content Marketing and Creation",
      description2: "Advertising and Media Buying",
      description3 :"Customer Relationship Management",
      imgUrl: projImg2,
      more: "/Operation",
    },
  {
      // title: "Analytics & Reporting",
      description: "Data Analytics and Interpretation",
      description1:"Performance Metrics Tracking",
      description2: "ROI Analysis and Reporting",
      description3 : "A/B Testing and Optimization",
      imgUrl: projImg3,
      more: "/Analytics",
    },];
    const projects1= [
    
    {
      // title: "Visual Identity and Branding",
      description: "Logo Design",
      description1 :"Visual Identity Development",
      description2:"Brand Guidelines Creation",
      description3 :"Packaging Design",
      imgUrl1: projImg4,
      more: "/Branding",
    },
    {
      // title: "Graphic Design and Content Creation",
      description: "Graphic Design",
      description1: "Illustration and Infographics",
      description2: "Video Production and Animation",
      description3: "Copywriting and Content Development",
      imgUrl1: projImg5,
      more: "/Design",
    },
    {
      // title: "Web and Digital Design",
      description: "Website Design and Development",
      description1:"Mobile App Design",
      description2: "User Experience (UX) Design",
      description3: "Interactive Media Design",
      imgUrl1: projImg6,
      more: "/Web",
    },
    {
      // title: "Event and Exhibition Design",
      description: "Event Theme and Booth Design",
      description1:"Event Promotion Materials",
      description2: "Exhibition Space Planning",
      
      imgUrl1: projImg7,
      more: "/Event",
    },
  ];

  return (
    <>
    <Navbar/>
    <div>
    {/* <section className="project1 ss" > */}
  <div className="serv">
     
    <div className="parent">
      <img src={servimage} alt="" className="serv-imag"/>
      <div className="text">
        <h1 className="hop"> OUR SERVICE</h1>
        <p className="pop">
          As a dynamic and forward-thinking entity, Cosmos Network is your strategic
           partner in innovation and creativity.
            From market research to digital presence management and creative design, 
            we offer comprehensive solutions for your business.
            Discover our services and elevate your brand to new heights!
        </p>
      </div>
    </div>
</div>

{/* *******block2******************** */}

      {/* <div> */}
  
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) => ( */}
                <div
                  // className={
                  //   isVisible ? "animate__animated animate__fadeIn" : ""
                  // }
                >
                  <div className="stag">
                  <h1 className="hep">STRATEGIC DEVELOPEMENT </h1>
                  {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                   
                    
                   
                        <div className="row">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                    
                   
                      
                      
                      </div>
                 {/* ***************create***************** */}
                  <div className="creat">
                  
                 
                      <h1 className="hep1">CREATIVE DEVELOPEMENT</h1>
                      <div className="riw">
                     
                          {projects1.map((project, index) => {
                            return <ProjectCard1 key={index} {...project} />;
                          })}
                        
                        </div>
                 
                  </div>
                {/* </div> */}
              {/* )} */}
            {/* </TrackVisibility> */}
        
      </div>
     
      </div>
    {/* </section> */}
    <section>
   <Footer/>
   </section>
    </>
  );
};
export default Service;

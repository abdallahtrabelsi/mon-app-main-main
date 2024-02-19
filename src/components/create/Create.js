import React, { useEffect } from "react";

// import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import download from "./strategie.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import "../strategie/strategie.scss";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";


// import { Link } from "react-router-dom";
export default function Strategie() {
    // const imageRef = useRef(null);

    // const { ref: firstContainer, inView: firstInView } = useInView({
    //     threshold: 0
    // });

    // const { ref: secondContainer, inView: secondInView } = useInView({
    //     threshold: 0
    // });

    // const { ref: thirdContainer, inView: thirdInView } = useInView({
    //     threshold: 0
    // });

    // const getImage = () => {
    //     if (firstInView)
    //         return require("./strategie.jpg");
    //     if (secondInView)
    //         return require("./creative.jpg");
    //     if (thirdInView)
    //         return require("./plv.jpg");

    // };


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (<><Navbar />
        <div className="strategie">
            <div className="strategie-block1">
                <h1 className="creh1">CREATIVE DEVELOPEMENT</h1>
            </div>
            {/* *******************block-Startegie******************* */}
            <div className="grids">

                {/* ****************box1**************** */}
                <div data-aos="fade-left" className="boxes">
                    <div className="row-strategie">
                        <div className="column-strategie">
                            <h1 className="h1-strategie">Visual Identity & Branding</h1>
                            <p className="p-strategie">Visual identity and branding are essential for creating a strong and cohesive brand image. Our agency specializes in crafting visually appealing and memorable brand identities that resonate with your target audience. We will work closely with you to develop a visual identity that accurately reflects your brand's personality, values, and positioning.
                                It includes designing logos, developing visual identities, packaging and creating brand guidelines.
                                <br /><br />
                                <button className="btn-strategie"><Link to="/Branding" className="llink1">Read More</Link></button>
                            </p>

                        </div>

                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>

                    </div>
                </div>
                {/* *****************box2*************** */}
                <div data-aos="fade-right" className="boxes">
                    <div className="row-strategie">
                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>
                        <div className="column-strategie">
                            <h1 className="h1-strategie">Graphic Design & Content Creation</h1>
                            <p className="p-strategie">Elevate your brand with captivating visual content. Our graphic design experts breathe life into your ideas, creating stunning visuals that resonate with your audience. From eye-catching graphics to compelling imagery, we craft content that tells your brand's unique story. Let our creativity enhance your brand's visual identity.

                                <br /><br />
                                <button className="btn-strategie"><Link to="/Design" className="llink1">Read More</Link></button>
                            </p>
                        </div>

                    </div>
                </div>
                {/* <div data-aos="flip-down" className="boxes">
                    <div className="content">
                        <CountUp className="content" end={1010} duration={0.6} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                            
                        </CountUp>
                    </div>
                </div> */}
                {/* *****************box3*************** */}
                <div data-aos="fade-left" className="boxes">
                    <div className="row-strategie">

                        <div className="column-strategie">
                            <h1 className="h1-strategie">Web & Digital Design</h1>
                            <p className="p-strategie">Your online presence matters, and our web and digital design team ensures it shines. We design user-friendly websites and captivating digital experiences that engage and convert visitors. Our responsive designs are tailored to your brand, providing a seamless user journey. Elevate your online impact with our design expertise.

                                <br /><br />
                                <button className="btn-strategie"><Link to="/Web" className="llink1">Read More</Link></button>
                            </p>
                        </div>
                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="boxes">
                    <div className="row-strategie">
                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>
                        <div className="column-strategie">
                            <h1 className="h1-strategie">Event & Exhibition Design</h1>
                            <p className="p-strategie">Make your events unforgettable with our event and exhibition design services. We bring your visions to life, creating immersive experiences that captivate attendees. From thematic booth designs to engaging promotional materials, we handle every detail,
                                ensuring your events leave a lasting impression. Trust us to elevate your event presence.
                                <br /><br />
                                <button className="btn-strategie"><Link to="/Event" className="llink1">Read More</Link></button>
                            </p>
                        </div>

                    </div>
                </div>

                {/* *****************box4*************** */}

            </div>

            {/* *******************block-Strategie******************* */}

            <div className="footer">
                <Footer />
            </div>
        </div ></>
    );
}
// {/* <button className="bbts"><Link to="/Analytics" className="llink1">Read More</Link></button>

import React, { useRef, useEffect } from "react";

import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import download from "./strategie.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import "./strategie.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
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
                <h1 className="creh1">STRATEGIC & OPERATION SERVICES</h1>
            </div>
            {/* *******************block-Startegie******************* */}
            <div className="grids">

                {/* ****************box1**************** */}
                <div data-aos="fade-left" className="boxes">
                    <div className="row-strategie">
                        <div className="column-strategie">
                            <h1 className="h1-strategie">Strategic Planning</h1>
                            <p className="p-strategie">we help businesses develop comprehensive plans to achieve their long-term objectives.
                                We work closely with you to understand your goals and industry landscape, crafting strategies that capitalize on
                                opportunities and drive growth. It includes setting objectives, defining market positioning, and creating a roadmap for
                                achieving business goals.
                                <br /><br />
                                <button className="btn-strategie"><Link to="/Planing" className="llink1">Read More</Link></button>
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
                            <h1 className="h1-strategie">Operational Execution</h1>
                            <p className="p-strategie">Operational execution involves implementing and managing the day-to-day activities and processes within an organization to achieve strategic objectives. Cosmos Network will assist you in optimizing your operational execution, ensuring efficiency, productivity, and alignment with your overall strategy goals.

                                <br /><br />
                                <button className="btn-strategie"><Link to="/Operation" className="llink1">Read More</Link></button>
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
                            <h1 className="h1-strategie">Analytics & Reporting</h1>
                            <p className="p-strategie">Data analytics and reporting are vital for understanding the performance of your business by measuring and analyzing the performance of strategic and operational efforts and making data-driven decisions.
                                Our agency can help you collect, analyze, and interpret data from various sources, providing you with valuable insights and reports that enable you to track progress, identify trends, and make informed business decisions.
                                <br /><br />
                                <button className="btn-strategie"><Link to="/Analytics" className="llink1">Read More</Link></button>
                            </p>
                        </div>
                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="boxes">
                    {/* <div className="row-strategie">
                        <div className="column-strategie coloo" >
                            <img src={download} alt="" className="image-strategie" />
                        </div>
                        <div className="column-strategie">
                            <h1 className="h1-strategie">Strategic Planning</h1>
                            <p className="p-strategie">we help businesses develop comprehensive plans to achieve their long-term objectives.
                                We work closely with you to understand your goals and industry landscape, crafting strategies that capitalize on
                                opportunities and drive growth. It includes setting objectives, defining market positioning, and creating a roadmap for
                                achieving business goals.
                            </p>
                        </div>

                    </div> */}
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

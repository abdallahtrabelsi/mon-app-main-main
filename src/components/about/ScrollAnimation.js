import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import imgs from "./cosmoss.png";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
export const ScrollAnimation = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const bottomShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
    );
    const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "40%"]);
    const topShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-25%", "100%"]
    );

    return (
        <section className="scroll-container" ref={containerRef}>
            <div className="copy">
                <h1 className="hero">Our Mission?</h1>
                <h2 className="pipo">To act as your cosmic partner, embarking on a journey of discovery and
                    connection. Through our creative approach and strategies, we seamlessly
                    bridge businesses and clients, bringing them together in a synergistic
                    dance of growth and success. We're not just about providing services;
                    we're about uncovering the best strategies, utilizing cutting-edge
                    technologies, and navigating the cosmic landscape to ensure your
                    brand shines brightly among the stars. Join us on this exciting cosmic
                    journey, where the possibilities are as limitless as the cosmos itself.</h2>
            </div>
            <div className="img-container">
                <motion.div className="img-inner" style={{ translateX: imageValue }}>
                    <motion.div
                        className="bottom-shadow"
                        style={{ translateX: bottomShadowValue }}
                    />
                    <img className="ii" src={imgs} alt="a green plant" />
                    <motion.div
                        className="top-shadow"
                        style={{ translateX: topShadowValue }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

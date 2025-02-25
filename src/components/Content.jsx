import React from "react";
import "./Content.css";
import { motion } from "framer-motion";
import thunder from "/public/thunder.png";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  };
};

function Content() {
  return (
    <motion.div
      className="content-container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      
      <motion.img
        src={thunder}
        alt=""
        className="thunder-logo"
        variants={fadeIn("down", 0.2)}
      />

      
      <div className="content">
        <motion.div
          className="upper-content"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="glow-text">150+</h1>
          <span className="glow-subtext">University Participating</span>
        </motion.div>

       
        <motion.div
          className="lower-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.div className="lc1" variants={fadeIn("left", 0.4)}>
            <h1>72+</h1>
            <span>judges</span>
          </motion.div>
          <motion.div className="lc2" variants={fadeIn("up", 0.5)}>
            <h1>21</h1>
            <span>Hackathons</span>
          </motion.div>
          <motion.div className="lc3" variants={fadeIn("right", 0.6)}>
            <h1>36+</h1>
            <span>Great Speakers</span>
          </motion.div>
        </motion.div>
      </div>

      
      <motion.div
        className="video-container"
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
      >
        <iframe
          width="1000"
          height="541"
          src="https://www.youtube.com/embed/gi1kkMbfNAE?si=axC-nQGw0EMD6xUK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default Content;

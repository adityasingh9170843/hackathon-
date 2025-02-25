import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const tabs = [
  "Overview",
  "Create Team",
  "Prizes & Sponsors",
  "FAQs",
  "Judging & Rules",
  "Resources",
];

function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="/public/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="tab-container"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="hero-tab-logo">
          <img src="/public/tab.png" alt="Hackindia_logo" />
        </div>
        <div className="hero-tab">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { delay: index * 0.1 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              <div>{tab}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="53"
                viewBox="0 0 150 53"
                fill="none"
                className="nav-svg"
              >
                <path
                  d="M55.2185 5.79534L55.3459 5.88201H55.4999H149.5V45.0939L139.271 51.7824H8.93799V0.5H47.4395L55.2185 5.79534Z"
                  fill="transparent"
                  stroke="#B026FF"
                ></path>
                <path
                  d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
                  stroke="#B026FF"
                  strokeWidth="0.7"
                ></path>
              </svg>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-banner"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="banner-img" whileHover={{ scale: 1.05 }}>
          <img src="/public/singularity.png" alt="banner_img" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <img src="/public/main.png" alt="banner_img2" />
        </motion.div>
      </motion.div>

      <motion.div
        className="banner-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.button whileHover={{ scale: 1.1 }}>
          <div>Register Now</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            className="nav-svg"
          >
            <path
              d="M55.2185 5.79534L55.3459 5.88201H55.4999H149.5V45.0939L139.271 51.7824H8.93799V0.5H47.4395L55.2185 5.79534Z"
              fill="transparent"
              stroke="#B026FF"
            ></path>
            <path
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
              stroke="#B026FF"
              strokeWidth="0.7"
            ></path>
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;

import React from "react";
import "./Hero.css";

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
      <div className="tab-container">
        <div className="hero-tab-logo">
          <img src="/public/tab.png" alt="Hackindia_logo" />
        </div>
        <div className="hero-tab">
          {tabs.map((tab) => (
            <button key={tab}>
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
                  stroke-width="0.7"
                ></path>
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div className="hero-banner">
        <div className="banner-img">
          <img src="/public/singularity.png" alt="banner_img" />
        </div>
        <div>
          <img src="/public/main.png" alt="banner_img2" />
        </div>
      </div>
      <div className="banner-button">
      <button>
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
                  stroke-width="0.7"
                ></path>
              </svg>
            </button>
      </div>
    </section>
  );
}

export default Hero;

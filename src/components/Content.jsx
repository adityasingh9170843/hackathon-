import React from "react";
import "./Content.css";
import thunder from "/public/thunder.png";

function Content() {
  return (
    <div className="content-container">
      <img src={thunder} alt="" className="thunder-logo" />
      <div className="content">
        <div className="upper-content">
          <h1 className="glow-text">150+</h1>
          <span className="glow-subtext">University Participating</span>
        </div>
        <div className="lower-content">
          <div className="lc1">
            <h1>72+</h1>
            <span>judges</span>
          </div>
          <div className="lc2">
            <h1>21</h1>
            <span>Hackathons</span>
          </div>
          <div className="lc3">
            <h1>36+</h1>
            <span>Great Speakers</span>
          </div>
        </div>
      </div>
      <div className="video-container">
        <iframe
          width="1000"
          height="541"
          src="https://www.youtube.com/embed/gi1kkMbfNAE?si=axC-nQGw0EMD6xUK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Content;

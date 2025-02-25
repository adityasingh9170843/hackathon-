import React from 'react'
import "./scrollSecond.css"

const images =[
    "/bn1.png",
    "/bn2.png",
    "/bn3.png",
    "/bn4.png",
    "/bn5.png",
]

function ScrollSecond() {
  return (
    <div className="scroll-second-container">
      <div className="scrollsecond-wrapper">
        
        {images.map((src, index) => (
          <img key={index} src={src} alt={`logo-${index}`} className="scroll-second-image" />
        ))}
      </div>
    </div>
  )
}

export default ScrollSecond
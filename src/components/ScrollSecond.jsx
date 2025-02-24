import React from 'react'
import "./ScrollSecond.css"

const images =[
    "/public/bn1.png",
    "/public/bn2.png",
    "/public/bn3.png",
    "/public/bn4.png",
    "/public/bn5.png",
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
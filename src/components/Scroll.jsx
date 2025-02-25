import React from 'react'
import "./scroll.css"

const images =[
    "/scroll1.png",
    "/scroll2.png",  
    "/scroll3.png",
    "/scroll4.png",
]

function Scroll() {
  return (
    <div className="scroll-container">
      <div className="scroll-wrapper">
        
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt={`logo-${index}`} className="scroll-image" />
        ))}
      </div>
    </div>
  )
}

export default Scroll
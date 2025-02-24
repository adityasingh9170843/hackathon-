import React from 'react'
import "./Scroll.css"

const images =[
    "/public/scroll1.png",
    "/public/scroll2.png",  
    "/public/scroll3.png",
    "/public/scroll4.png",
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
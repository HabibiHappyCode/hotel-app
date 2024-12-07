import React from 'react'
import '../../CSS/Gallery.css'

function Gallery({ img, name }) {
  return (
    <div className='gal-container'>
      <img src={img} alt="" />

      <div className="content">

        <div className="content-one">
            <p>from $<sub>2</sub>50</p>
            <h2>{name}</h2>
        </div>

        <div className="content-two">
            <p>learn more</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery

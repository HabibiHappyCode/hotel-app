import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../CSS/Slides.css'

function Slides() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider-container">

      <Slider {...settings}>

        <div className="box-one">
          <img src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1733270099/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash_facclg.jpg" alt="" />

          <div className="content">
            <h1>laolord resort</h1>
            <p>unlock to enjoy the view of martine</p>
          </div>
        </div>

        <div className="box-two">
          <img src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1732226076/subopiheqgyok8cwhh8y.jpg" alt="" />

          <div className="content">
            <h1>life is beautiful</h1>
            <p>unlock to enjoy the view of martine</p>
          </div>
        </div>

      </Slider>

    </div>
  );
}


export default Slides

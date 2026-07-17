import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import euphony_round3 from '../assets/event_posters/euphony_round3.jpg';
import euphony_judges from '../assets/event_posters/euphony_judges.jpg';

function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    outerWidth: false,
  };
  return (
    <Slider {...settings} >
      <div>
        <img src={euphony_round3} className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
      <div>
        <img src={euphony_judges} className="winner-image max-h-[15rem] mx-auto object-contain m-[1rem]"></img>
      </div>
    </Slider >
  );
}

export default Carousel;

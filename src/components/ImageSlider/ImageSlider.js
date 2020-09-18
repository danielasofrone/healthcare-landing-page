import Slider from "react-slick";
import React from "react";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
        <div>
          <Slide />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

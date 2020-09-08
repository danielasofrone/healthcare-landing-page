import React from "react";
import Slider from "react-slick";
import * as S from "./imageSlider.styled";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <S.Wrapper>
      <Slider {...settings}>
        <S.SliderPage>
          <h3>Page 1</h3>
        </S.SliderPage>
        <S.SliderPage>
          <h3>Page 2</h3>
        </S.SliderPage>
      </Slider>
    </S.Wrapper>
  );
};
export default ImageSlider;

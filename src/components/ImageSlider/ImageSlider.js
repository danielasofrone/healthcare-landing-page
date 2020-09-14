import React from "react";
import * as S from "./imageSlider.styled";
import * as C from "../Services/services.styled";
import founder from "../../assets/img/founder.svg";

const ImageSlider = () => (
  <S.Wrapper>
    <S.SliderPage>
      <S.SlideTitle>What our customer are saying</S.SlideTitle>
      <C.LimitingLine isServices />

      <S.BottomContainer>
        <S.ImageContainer src={founder} />

        <S.FounderText>
          <S.FounderName>Edward Newgate</S.FounderName>
          <S.FounderDescription>Founder Circle</S.FounderDescription>
        </S.FounderText>

        <S.DescriptionContainer>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </S.DescriptionContainer>
      </S.BottomContainer>
    </S.SliderPage>
  </S.Wrapper>
);

export default ImageSlider;

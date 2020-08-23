import React from "react";
import * as S from "./navigationBar.styled";
import logo from "../../assets/icons/logo.png";

const NavigationBar = () => (
  <S.Wrapper>
    <S.LeftSide>
      <S.LogoContainer src={logo} />
    </S.LeftSide>
    <S.RightSide></S.RightSide>
  </S.Wrapper>
);

export default NavigationBar;

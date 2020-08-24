import React from "react";
import * as S from "./homePage.styled";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Homepage = () => (
  <S.Wrapper>
    <NavigationBar />
    <Header />
  </S.Wrapper>
);

export default Homepage;

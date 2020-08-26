import React from "react";
import * as S from "./homePage.styled";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Homepage = () => (
  <S.Wrapper>
    <NavigationBar />
    <Header />
    <Services />
  </S.Wrapper>
);

export default Homepage;

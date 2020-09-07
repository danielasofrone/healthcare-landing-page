import React from "react";
import * as S from "./footer.styled";
import logo from "../../assets/icons/logo.svg";

const Footer = () => (
  <S.Wrapper>
    <S.InfoTextTrafalgar>
      <img src={logo} alt="Company logo" />
      <S.CompanyDescription>
        Trafalgar provides progressive, and affordable healthcare, accessible on
        mobile and online for everyone ©Trafalgar PTY LTD
      </S.CompanyDescription>
      <S.Copyright>
        {String(new Date().getFullYear())}. All rights reserved
      </S.Copyright>
    </S.InfoTextTrafalgar>
    <S.CompanyColumn>
      <S.ColumnTitle>Company</S.ColumnTitle>
      <S.ColumnText>
        <div>About</div>
        <div>Testimonials</div>
        <div>Find a doctor</div>
        <div>Apps</div>
      </S.ColumnText>
    </S.CompanyColumn>
    <S.RegionColumn>
      <S.ColumnTitle>Region</S.ColumnTitle>
      <S.ColumnText>
        <div>Indonesia</div>
        <div>Singapore</div>
        <div>Hongkong</div>
        <div>Canada</div>
      </S.ColumnText>
    </S.RegionColumn>
    <S.HelpColumn>
      <S.ColumnTitle>Help</S.ColumnTitle>
      <S.ColumnText>
        <div>Help center</div>
        <div> Contact support</div>
        <div>Instructions</div>
        <div>How it works</div>
      </S.ColumnText>
    </S.HelpColumn>
  </S.Wrapper>
);

export default Footer;

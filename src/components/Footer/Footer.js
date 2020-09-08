import React from "react";
import * as S from "./footer.styled";
import logo_white from "../../assets/icons/logo_white.svg";
import element_dots_square from "../../assets/img/element_dots_square.svg";
import element_dots_white from "../../assets/img/element_dots_white.svg";

const Footer = () => (
  <div>
    <S.DecorationBackgroundDots src={element_dots_square} />
    <S.DecorationDots src={element_dots_white} />
    <S.Wrapper>
      <S.InfoTextTrafalgar>
        <S.CompanyLogo>
          <img src={logo_white} alt="Company logo" />
        </S.CompanyLogo>
        <S.CompanyDescription>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </S.CompanyDescription>
        <S.Copyright>
          ©Trafalgar PTY LTD {String(new Date().getFullYear())}. All rights
          reserved
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
  </div>
);

export default Footer;

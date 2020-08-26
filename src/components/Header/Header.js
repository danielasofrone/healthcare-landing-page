import React from "react";
import * as S from "./header.styled";
import Button from "../Button/Button";
import illustration from "../../assets/img/illustration.png";

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderDescription>
      <S.HeaderTitle>Virtual Healthcare for you</S.HeaderTitle>
      <S.HeaderText>
        Trafalgar provides progressive, and affordable healthcare, accessible on
        mobile and online for everyone
      </S.HeaderText>
      <S.ButtonContainer>
        <Button isBlue>Consult now</Button>
      </S.ButtonContainer>
    </S.HeaderDescription>
    <S.HeaderImageConatiner>
      <S.HeaderImage src={illustration} />
    </S.HeaderImageConatiner>
  </S.HeaderContainer>
);

export default Header;

import React from "react";
import * as S from "../Header/header.styled";
import * as C from "../Services/services.styled";
import Button from "../Button/Button";
import download_app_illustration from "../../assets/img/download_app_illustration.svg";

const DownloadApp = () => (
  <S.HeaderContainer>
    <S.HeaderDescription isLeft>
      <S.HeaderTitle>Download our mobile apps</S.HeaderTitle>
      <C.LimitingLine />
      <S.HeaderText>
        Our dedicated patient engagement app and web portal allow you to access
        information instantaneously (no tedeous form, long calls, or
        administrative hassle) and securely
      </S.HeaderText>
      <S.ButtonContainer>
        <Button>Download &darr;</Button>
      </S.ButtonContainer>
    </S.HeaderDescription>
    <S.HeaderImageContainer>
      <S.HeaderImage src={download_app_illustration} />
    </S.HeaderImageContainer>
  </S.HeaderContainer>
);

export default DownloadApp;

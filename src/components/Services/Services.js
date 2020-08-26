import React from "react";
import * as S from "./services.styled";
import frame from "../../assets/img/frame.png";
import ServicesCard from "../ServicesCard/ServicesCard";
import { cardsData } from "./cardsData";

const Services = () => (
  <S.DecorationBackgroundContainer>
    <S.DecorationBackground src={frame}>
      <S.Wrapper>
        <S.ServicesTitle>Our services</S.ServicesTitle>
        <S.LimitingLine />
        <S.ServicesDescription>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </S.ServicesDescription>
        <S.CardsContainer>
          {cardsData.map((card) => (
            <ServicesCard
              key={card.id}
              image={{ src: card.image }}
              title={card.title}
              text={card.text}
            />
          ))}
        </S.CardsContainer>
      </S.Wrapper>
    </S.DecorationBackground>
  </S.DecorationBackgroundContainer>
);

export default Services;

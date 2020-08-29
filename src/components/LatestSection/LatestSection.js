import React from "react";
import * as S from "./latestSection.styled";
import * as C from "../Services/services.styled";
import NewsCard from "../Cards/NewsCard/NewsCard";
import Button from "../Button/Button";
import { newsCards } from "../Services/cardsData";

const LatestSection = () => (
  <S.Wrapper>
    <S.SectionTitle>Check out our latest article</S.SectionTitle>
    <C.LimitingLine isServices />
    <S.CardsContainer>
      {newsCards.map((card) => (
        <NewsCard
          key={card.id}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </S.CardsContainer>
    <S.ButtonContainer>
      <Button>View all</Button>
    </S.ButtonContainer>
  </S.Wrapper>
);

export default LatestSection;

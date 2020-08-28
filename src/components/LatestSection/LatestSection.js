import React from "react";
import * as S from "./latestSection.styled";
import ServicesCard from "../Cards/ServicesCard";
import Button from "../Button/Button";
import { newsCards } from "../Services/cardsData";

const LatestSection = () => (
  <S.Wrapper>
    <S.SectionTitle>Check out our latest article</S.SectionTitle>
    <S.SectionDescription>
      We provide to you the best choiches for you. Adjust it to your health
      needs and make sure your undergo treatment with our highly qualified
      doctors you can consult with us which type of service is suitable for your
      health
    </S.SectionDescription>
    <S.CardsContainer>
      {newsCards.map((card) => (
        <ServicesCard
          key={card.id}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </S.CardsContainer>
    <S.ButtonContainer>
      <Button>Learn more</Button>
    </S.ButtonContainer>
  </S.Wrapper>
);

export default LatestSection;

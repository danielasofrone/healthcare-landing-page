import React from "react";
import * as S from "./services.styled";
import vector from "../../assets/img/vector.svg";
import ServicesCard from "../ServicesCard/ServicesCard";
import { cardsData } from "./cardsData";

const Services = () => (
  <>
    <div>
      <S.DecorationBackground src={vector}></S.DecorationBackground>
    </div>
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
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </S.CardsContainer>
    </S.Wrapper>
  </>
);

export default Services;

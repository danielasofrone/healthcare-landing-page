import React from "react";
import * as S from "./servicesCard.styled";
import PropTypes from "prop-types";

const NewsCard = ({ image, title, text }) => (
  <S.CardContainer>
    <S.CardImage>
      <img src={image} alt="Card image" />
    </S.CardImage>
    <S.CardTitle>{title}</S.CardTitle>
    <S.CardDescription>{text}</S.CardDescription>
    <S.ReadMoreLink>Read more... &rarr;</S.ReadMoreLink>
  </S.CardContainer>
);

NewsCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCard;

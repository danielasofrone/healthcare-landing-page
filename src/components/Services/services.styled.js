import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 70px;
  z-index: 99;
`;

export const DecorationBackgroundContainer = styled.div`
  width: 1120px;
  height: 970px;
  margin-left: -120px;
`;

export const DecorationBackground = styled.div`
  width: 940px;
  height: 670px;
  left: -20.42px;
  top: 965px;
  opacity: 0.6;
  transform: rotate(21.46deg);
  object-fit: cover;
`;

export const ServicesTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  text-align: center;
`;

export const ServicesDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #7d7987;
  white-space: normal;
`;

export const LimitingLine = styled.div`
  border-bottom: 2px solid #000;
  height: auto;
  width: 56px;
  margin: 35px auto;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;
  overflow-x: auto;
  @media (min-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
    overflow-x: initial;
  }
`;

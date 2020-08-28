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
`;

export const DecorationBackground = styled.svg`
  width: 940px;
  height: 670px;
  display: block;
  position: absolute;
  opacity: 0.6;
  left: -50px;
  right: auto;
  margin-top: 300px;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
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

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 70px;
  z-index: 99;
`;

export const SectionTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  color: #000000;
  text-align: center;
`;

export const SectionDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #7d7987;
  white-space: normal;
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

export const ButtonContainer = styled.div`
  margin: 70px auto;
`;

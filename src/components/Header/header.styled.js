import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: ${({ isHeader }) =>
    isHeader ? "100px 100px 50px 100px" : "120px 100px"};
`;

export const BackgroundSvg = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  left: 0;
  margin-top: -3%;
`;

export const DecorationBackgroundDots = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  right: 0;
  margin-top: -10%;
`;

export const HeaderDescription = styled.div`
  margin-top: ${({ isHeader }) => (isHeader ? "10%" : "0")};
  margin-right: ${({ isLeft }) => (isLeft ? "10%" : "0")};
  margin-left: ${({ isLeft }) => (isLeft ? "0" : "10%")};
  z-index: 99;
`;

export const HeaderTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  white-space: normal;
  margin-bottom: 10px;
  z-index: 99;
`;

export const HeaderText = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 21px;
  line-height: 32px;
  color: #7d7987;
  z-index: 99;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  z-index: 99;
`;

export const HeaderImageContainer = styled.div`
  z-index: 99;
`;

export const HeaderImage = styled.img`
  object-fit: cover;
`;

// @media (min-width: 576px) {
//   flex-direction: column;
//   margin: 120px 70px;
// }

import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 99;
  margin: ${({ isHeader }) =>
    isHeader ? "100px 100px 50px 100px" : "120px 100px"};
`;

export const BackgroundSvg = styled.img`
  left: 0;
  margin-top: 30px;
  z-index: 1;
`;

export const HeaderDescription = styled.div`
  margin-top: ${({ isHeader }) => (isHeader ? "10%" : "0")};
  margin-right: ${({ isLeft }) => (isLeft ? "10%" : "0")};
  margin-left: ${({ isLeft }) => (isLeft ? "0" : "10%")};
`;

export const HeaderTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  white-space: normal;
  margin-bottom: 10px;
`;

export const HeaderText = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 21px;
  line-height: 32px;
  color: #7d7987;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export const HeaderImageContainer = styled.div``;

export const HeaderImage = styled.img`
  object-fit: cover;
`;

// @media (min-width: 576px) {
//   flex-direction: column;
//   margin: 120px 70px;
// }

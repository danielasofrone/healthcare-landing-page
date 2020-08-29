import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: ${({ isHeader }) => (isHeader ? "100px 0 50px 0" : "120px 0")};
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

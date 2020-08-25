import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const HeaderDescription = styled.div`
  max-width: 445px;
  max-height: 338px;
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

export const HeaderImageConatiner = styled.div`
  max-width: 693px;
  max-height: 598px;
`;

export const HeaderImage = styled.img`
  object-fit: cover;
`;

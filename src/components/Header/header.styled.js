import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  top: 50%;
`;

export const HeaderDescription = styled.div`
  width: 445px;
  height: 338px;
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

export const HeaderImageConatiner = styled.div`
  width: 693px;
  height: 598px;
`;

export const HeaderImage = styled.img`
  object-fit: cover;
`;

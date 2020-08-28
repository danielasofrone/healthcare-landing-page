import styled from "styled-components";

export const CardContainer = styled.div`
  /* min-width: 200px;
  min-height: 270px; */
  width: 350px;
  height: 512px;
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  padding: 50px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 369px;
  height: 246px;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CardDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #7d7987;
`;

export const ReadMoreLink = styled.div`
  font-family: "Mulish";
  font-weight: 600;
  font-size: 17px;
  line-height: 28px;
  color: #4089ed;
`;

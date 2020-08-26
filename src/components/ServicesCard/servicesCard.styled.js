import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 200px;
  min-height: 200px;
  max-width: 350px;
  max-height: 354px;
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  padding: 50px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
export const CardImage = styled.div`
  width: 92px;
  height: 90px;
  margin-bottom: 30px;
`;

export const CardTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 24px;
  line-height: 56px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #7d7987;
`;

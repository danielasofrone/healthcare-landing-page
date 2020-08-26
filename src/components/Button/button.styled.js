import styled from "styled-components";

export const Button = styled.div`
  width: 200px;
  height: 60px;
  font-family: "Mulish";
  font-weight: bold;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  color: ${({ isBlue }) => (isBlue ? "#ffffff" : "#458ff6")};
  border-radius: 55px;
  background: ${({ isBlue }) => (isBlue ? "#458ff6" : "#ffffff")};
  cursor: pointer;
`;

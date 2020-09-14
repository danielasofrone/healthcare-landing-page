import styled from "styled-components";
import founder from "../../assets/img/founder.svg";

export const Wrapper = styled.div`
  margin: 120px 140px;
`;

export const SliderPage = styled.div`
  height: 425px;
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;
  color: #fff;
  text-align: center;
  padding: 50px 70px;
`;

export const SlideTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  color: #ffffff;
`;

export const BottomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  margin-top: 10%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const FounderInfo = styled.div`
  display: flex;
  flex: 1;
`;

export const ImageContainer = styled.img`
  flex: 1;
  width: 100px;
  height: 100px;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #fff;
`;

export const FounderText = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FounderName = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 22px;
  line-height: 48px;
  color: #ffffff;
  margin-bottom: 10px;
`;
export const FounderDescription = styled.div`
  font-family: "Mulish";
  font-weight: normal;
  font-size: 18px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.85);
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  font-family: "Mulish";
  font-weight: normal;
  font-size: 19px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
`;

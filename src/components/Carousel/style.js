import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const rotateArrow = ({ to }) => {
  switch (to) {
    case "right":
      return {
        transform: "rotate(-90deg)",
        right: "32px",
      };
    case "left":
      return {
        transform: "rotate(90deg)",
        left: "32px",
      };
    default:
      return null;
  }
};

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  background: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  ${rotateArrow};
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
  z-index: 5;
`;

const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  max-width: 1440px;
  margin: 0 auto;
`;
Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export { Container, Arrow, Img, Blur, Content };

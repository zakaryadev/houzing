import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const rotateArrow = ({ to }) => {
  switch (to) {
    case "right":
      return {
        transform: "rotate(-90deg)",
        right: "-10%",
      };
    case "left":
      return {
        transform: "rotate(90deg)",
        left: "-10%",
      };
    default:
      return null;
  }
};

const Container = styled.div`
  position: relative;
  height: fit-content;
  padding: 0 130px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const Content = styled.div`
  padding-top: 96px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  background: rgba(255, 255, 255, 1);
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  cursor: pointer;
  ${rotateArrow};
  :hover {
    background: rgba(255, 255, 255, 1);
  }
  z-index: 10;
  & path {
    fill: var(--colorPrimary);
  }
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;
export { Content, Container, Arrow };

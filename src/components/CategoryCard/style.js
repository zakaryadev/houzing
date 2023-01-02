import styled from "styled-components";
import { ReactComponent as HouseIcon } from "../../assets/icons/HouseIcon.svg";

const Container = styled.div`
  cursor: pointer;
  min-height: 200px;
  max-height: 350px;
  min-width: 160px;
  max-width: 280px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0));
  display: inline-block;
  border-radius: 3px;
  background: #ffffff;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
  //height: fit-content;
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
`;

const Icons = styled.div`
  
`;

Icons.HouseIcon = styled(HouseIcon)`
  height: 60px;
  width: 60px;
  margin-bottom: 24px;
`;


export { Container, Img, Content, Icons, Blur };

import styled from "styled-components";
import { ReactComponent as discord } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as calc } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardMap } from "../../assets/icons/cardMaps.svg";

const Container = styled.div`
  width: 100%;
  background-color: #f5f7fc;
  padding: 48px 130px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Content.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: var(--colorPrimary);
`;

Content.Desc = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: var(--colorSecondary);
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(235px, 285px));
  justify-content: space-around;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Icons = styled.div``;

Icons.Discord = styled(discord)`
  margin-bottom: 24px;
  & path {
    fill: var(--backgroundPrimary);
  }
`;

Icons.House = styled(house)`
  margin-bottom: 24px;
  & path {
    fill: var(--backgroundPrimary);
  }
`;

Icons.Calc = styled(calc)`
  margin-bottom: 24px;
  & path {
    fill: var(--backgroundPrimary);
  }
`;

Icons.Map = styled(cardMap)`
  margin-bottom: 24px;
  & path {
    fill: var(--backgroundPrimary);
  }
`;

export { Container, Content, Wrapper, Icons };

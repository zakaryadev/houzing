import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  background: #0d263b;
  display: flex;
  position: relative;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;

const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-right: 21px;
  width: 54px !important;
  height: 54px !important;
  & path {
    fill: white;
  }
`;

Icon.Phone = styled(phone)`
  margin-right: 21px;
  width: 24px !important;
  height: 24px !important;
  & path {
    fill: white;
  }
`;

Icon.Location = styled(location)`
  margin-right: 21px;
  width: 54px;
  height: 54px;
  & path {
    fill: white;
  }
`;

const Main = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
  color: #fff !important;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

Wrapper.Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  user-select: none;

  .active {
    color: #b8ff06;
  }
`;

const Logo = styled(LogoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

export { Container, Content, Icon, Wrapper, Section, Logo, Main };

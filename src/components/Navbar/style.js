import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
  // position: sticky;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 20;
  color: #fff !important;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
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

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin: 0 32px;
  :hover {
    color: #b8ff06 !important;
  }
`;

const Icon = styled.div``;

Icon.User = styled(User)`
  width: 24px;
  height: 24px;
  & path {
    fill: #ffffff;
  }
`;

export { Container, Wrapper, Section, Logo, Link, Main, Icon };

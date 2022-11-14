import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({logo}) => logo && "pointer"};
  user-select: none;

  .active {
    color: #b8ff06;
  }
`;

const Logo = styled(LogoImg)`
  width: 30px;
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin: 0 32px;
`;

export { Container, Wrapper, Section, Logo, Link };

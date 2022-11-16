import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {Container, Link, Logo, Main, Section, Wrapper} from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden}, index) => {
              return !hidden && (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Button type={'dark'}>Sign in</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;

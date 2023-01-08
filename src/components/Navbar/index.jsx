import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Main, Section, Wrapper, Icon } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const nav = (path) => {
    navigate(path);
  };
  const items = [
    {
      key: "1",
      label: (
        <p className="a-menu-item" onClick={() => nav("/profile")}>
          My profile
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p className="a-menu-item" onClick={() => nav("/myproperties")}>
          My Properties
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <p className="a-menu-item" onClick={() => nav("/favourite")}>
          Favourites
        </p>
      ),
    },
  ];
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {localStorage.getItem("token") &&
            localStorage.getItem("token").length > 0 ? (
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                trigger="click"
              >
                <Icon.User />
              </Dropdown>
            ) : (
              <Button onClick={() => navigate("/signin")} type={"dark"}>
                Sign in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;

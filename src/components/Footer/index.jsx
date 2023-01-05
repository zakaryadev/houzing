import React from "react";
import {  Container, Content, Icon, Wrapper, Section, Logo, Main } from './style';
import { Footer as Footergo } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
    <Container>
        <Wrapper>
          <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location />
          Jasarat street, Orak Balga,
          AralSoft Academy
        </Content.Item>
        <Content.Item>
          <Icon.Phone /> 998 91 382 8433
        </Content.Item>
        <Content.Item>
          <Icon.Email /> zakaryadev77@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Karakalpakstan</Content.Item>
        <Content.Item> Kazakhstan</Content.Item>
        <Content.Item> Russia</Content.Item>
        <Content.Item> Iran</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>
        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Android </Content.Item>
        <Content.Item>Data </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/smd_94</Content.Item>
      </Content>
      </Wrapper>
    </Container>
      <Footergo>
        <Main>
          <Wrapper>
            <Section onClick={() => navigate("/home")} logo>
              <Logo /> <h3>Houzing</h3>
            </Section>
            
            <Section>
              <div className="footer-info">Copyright © 2021 CreativeLayers. All Right Reserved.</div>
            </Section>
          </Wrapper>
        </Main>
    </Footergo>
    </>
  );
};

export default Footer;

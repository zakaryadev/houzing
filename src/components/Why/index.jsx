import React from "react";
import { Container, Content, Wrapper, Icons } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className={"sectionTitle"}> Why Choose Us? </h1>
        <p className={"sectionSubTitle"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Content>
      <Wrapper>
        <Content>
          <Content.Wrapper>
            <Icons.Discord />
          <Content.Title>
            Trusted By Thousands
          </Content.Title>
          <Content.Desc>
            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
          </Content.Desc>
          </Content.Wrapper>
        </Content>
        
        <Content>
          <Content.Wrapper>
            <Icons.House />
          <Content.Title>
            Wide Renge Of Properties
          </Content.Title>
          <Content.Desc>
            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
          </Content.Desc>
          </Content.Wrapper>
        </Content>

        <Content>
          <Content.Wrapper>
            <Icons.Calc />
          <Content.Title>
            Financing Made Easy
          </Content.Title>
          <Content.Desc>
            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
          </Content.Desc>
          </Content.Wrapper>
        </Content>

        <Content>
          <Content.Wrapper>
            <Icons.Map />
          <Content.Title>
            See Neighborhoods
          </Content.Title>
          <Content.Desc>
            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
          </Content.Desc>
          </Content.Wrapper>
        </Content>


      </Wrapper>
    </Container>
  );
};

export default Why;

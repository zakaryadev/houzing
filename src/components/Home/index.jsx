import React from "react";
import { Container } from "./styles";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import { ReadMore } from "../ReadMore";
import Recent from "../Recent";

export const Home = (props) => {
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      <Category />
      <ReadMore />
      <Recent />
    </Container>
  );
};

export default Home;

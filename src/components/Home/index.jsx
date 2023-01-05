import React from "react";
import { Container } from "./styles";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";

export const Home = (props) => {
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      <Category />
    </Container>
  );
};

export default Home;

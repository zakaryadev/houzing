import React from 'react';
import {Container} from "./styles";
import GenCarousel from "../Carousel";
import Category from "../Category";

export const Home = (props) => {

  return (
      <Container>
          <GenCarousel />
          <Category/>
      </Container>
  );
};

export default Home;
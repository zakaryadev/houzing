import React from 'react';
import {Container} from "./styles";
import {Button, Input} from "../Generic";
import GenCarousel from "../Carousel";
export const Home = (props) => {

  return (
      <Container>
        <GenCarousel />
      </Container>
  );
};

export default Home;
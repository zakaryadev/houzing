import React from 'react';
import {Container} from "./styles";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
export const Home = (props) => {

  return (
      <Container>
        <GenCarousel />
      </Container>
  );
};

export default Home;
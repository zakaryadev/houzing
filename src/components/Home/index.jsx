import React from 'react';
import {Container} from "./styles";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
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
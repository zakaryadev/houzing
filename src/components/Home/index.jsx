import React from 'react';
import {Container} from "./styles";
import GenCarousel from "../Carousel";
import HouseCard from "../HouseCard";
import CategoryCard from "../CategoryCard";

export const Home = (props) => {

  return (
      <Container>
          <GenCarousel />
          {/*<HouseCard />*/}
          <CategoryCard />
      </Container>
  );
};

export default Home;
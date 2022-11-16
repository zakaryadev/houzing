import React from 'react';
import {Container} from "./styles";
import {Button, Input} from "../Generic";
export const Home = (props) => {

  return (
      <Container>
        <h1>Home</h1>
        <Input width={200} placeholder={"Text"} />
        <Button width={200}>Sign In</Button>
      </Container>
  );
};

export default Home;
import React, { useEffect, useState } from 'react';
import {Container, Wrapper} from "./styles";
import HouseCard from "../HouseCard";
export const Properties = () => {
  const [data, setData] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    fetch(`${url}houses/list`)
      .then(res => res.json())
      .then(data => {
        setData(data.data)
      });
  },[])

  return (
    <Wrapper>
      <Container>
        {
          data.map((item,index) => {
            return <HouseCard key={index} data={item} />
          })
        }
      </Container>
    </Wrapper>
  );
};

export default Properties;
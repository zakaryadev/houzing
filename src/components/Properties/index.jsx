import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import HouseCard from "../HouseCard";
import { useLocation } from "react-router-dom";
export const Properties = () => {
  const [data, setData] = useState([]);
  const { REACT_APP_BASE_URL: url } = process.env;
  const { search } = useLocation();
  useEffect(() => {
    fetch(`${url}houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Wrapper>
      <Container>
        {data.map((item, index) => {
          return <HouseCard key={index} data={item} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Properties;

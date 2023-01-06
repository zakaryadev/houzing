import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import HouseCard from "../HouseCard";
import { useLocation, useParams } from "react-router-dom";

export const HouseDetails = () => {
  const [data, setData] = useState([]);
  const { REACT_APP_BASE_URL: url } = process.env;
  const { search } = useLocation();
  const {id} = useParams();
  useEffect(() => {
    fetch(`${url}houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Wrapper>
      <div className="section-name">
        <h1 className={"sectionTitle"}> {data.name} </h1>
        <p className={"sectionSubTitle"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
        </div>
      <Container>
        {data.length > 0 ?
            (data.map((item, index) =><HouseCard key={index} data={item} />))
            :
            (<h1>Nothing Found</h1>)}
      </Container>
    </Wrapper>
  );
};

export default HouseDetails;

import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import { useParams } from "react-router-dom";
import NoData from "../NoData";

export const HouseDetails = () => {
  const [data, setData] = useState([]);
  const { REACT_APP_BASE_URL: url } = process.env;
  const { id } = useParams();
  useEffect(() => {
    fetch(`${url}houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(data);
  return (
    <Wrapper>
      <div className="section-name">
        <h1 className={"sectionTitle"}> {data.name} </h1>
        <p className={"sectionSubTitle"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>
      {data ? (
        <Container>{JSON.stringify(data, 2, " ")}</Container>
      ) : (
        <NoData />
      )}
    </Wrapper>
  );
};

export default HouseDetails;

import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
export const Properties = () => {
  const [data, setData] = useState([]);
  const { REACT_APP_BASE_URL: url } = process.env;
  const { search } = useLocation();
  const navigate = useNavigate();
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
      <div className="section-name">
        <h1 className={"sectionTitle"}> Properties </h1>
        <p className={"sectionSubTitle"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
        </div>
      <Container>
        {data.length > 0 ?
            (data.map((item, index) =><HouseCard onClick={() => navigate(`${item.id}`)} key={index} data={item} />))
            :
            (<h1>Nothing Found</h1>)}
      </Container>
    </Wrapper>
  );
};

export default Properties;

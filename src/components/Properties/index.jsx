import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./styles";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import NoData from "../NoData";

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();
  useEffect(() => {
    request({ url: `houses/list${search}` }).then((res) => {
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
      {/* <div className="count-sort">
        <p>123123 results</p>
        
      </div> */}
      {data.length <= 0 ? (
        <NoData />
      ) : (
        <Container>
          {data.map((item, index) => (
            <HouseCard
              onClick={() => navigate(`${item.id}`)}
              key={index}
              data={item}
            />
          ))}
        </Container>
      )}
    </Wrapper>
  );
};

export default Properties;

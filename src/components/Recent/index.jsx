import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HouseCard } from "../HouseCard";
import { Arrow, Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function Recent() {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <div {...props}>{children}</div>
  );
  const settings = {
    className: "center",
    centerPadding: '25px',
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: (
      <SlickButtonFix>
        <Arrow to={"right"} />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <Arrow to={"left"} />
      </SlickButtonFix>
    ),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <span className="dots"></span>,
  };
  return (
    <Container>
      <h1 className={"sectionTitle"}> Recent Properties for Rent </h1>
      <p className={"sectionSubTitle"}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Slider {...settings}>
        {data.slice(8,12).map((item, index) => {
          return (
            <HouseCard
              gap={20}
              onClick={() => navigate(`/properties/${item.id}`)}
              data={item}
              key={index}
            />
          );
        })}
      </Slider>
    </Container>
  );
}

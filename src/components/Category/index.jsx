import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import {Arrow, Container} from "./style";
import {useNavigate} from "react-router-dom";
export default function Category() {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    centerPadding: "20px",
    nextArrow: <Arrow to={"right"} />,
    prevArrow: <Arrow to={"left"} />,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <span className="dots">{""}</span>
    )
  };
    return (
      <Container style={{color: "black"}}>
        <h1 className={"sectionTitle"}> Category </h1>
        <p className={"sectionSubTitle"}>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <Slider {...settings}>
            {data.map((item, index) => {
              return(<div key={index}>
                <CategoryCard onClick={() => navigate(`/properties?category=${item?.name}`)} data={item} key={index} />
              </div>);
            })}
        </Slider>
      </Container>
    )
}
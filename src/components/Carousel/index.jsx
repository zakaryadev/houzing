import React, { useRef } from "react";
import { Arrow, Container, Slider } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const sliderRef = useRef();
  const onMove = ({target: { dataset: { name }}}) => {
    if (name === "next") sliderRef.current.next();
    if (name === "prev") sliderRef.current.prev();
  };
  return (
    <Container>
      <Carousel ref={sliderRef}>
        <Slider>
          <Slider.Content>
            <Slider.ContentTitle>Skype Pool Apartment</Slider.ContentTitle>
            <Slider.ContentDesc className="subChild">
            112 Glenwood Ave Hyde Park, Boston, MA
            </Slider.ContentDesc>
            <Slider.ContentPrice>5,250 / month</Slider.ContentPrice>
          </Slider.Content>
          <Slider.Bloor />
          <Slider.Img src={img1} />
        </Slider>
        <Slider>
          <Slider.Content>
            <Slider.ContentTitle>Skype Pool Apartment</Slider.ContentTitle>
            <Slider.ContentDesc className="subChild">
            112 Glenwood Ave Hyde Park, Boston, MA
            </Slider.ContentDesc>
            <Slider.ContentPrice>5,250 / month</Slider.ContentPrice>
          </Slider.Content>
          <Slider.Bloor />
          <Slider.Img src={img2} />
        </Slider>
      </Carousel>
        <Arrow onClick={onMove} data-name="prev" to={"left"} />
        <Arrow onClick={onMove} data-name="next" to={"right"} />
    </Container>
  );
};
export default GenCarousel;
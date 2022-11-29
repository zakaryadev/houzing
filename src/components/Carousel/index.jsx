import React, { useRef } from "react";
import {Arrow, Blur, Container, Content, Img} from "./style";
import { Carousel } from 'antd';
import img1 from '../../assets/img/house1.png';
import img2 from '../../assets/img/house2.png';

export const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const slider = useRef();
  const onMove = ({target: {dataset : {name}}}) => {
    if(name === 'next') slider.current.next();
    if(name === 'prev') slider.current.prev();
  }
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skype Pool Apartment</Content.Title>
        <Content.Desc className='subChild'>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
      </Content>
    <Arrow onClick={onMove} data-name='prev' to={"left"} />
    <Arrow onClick={onMove} data-name='next' to={"right"} />
    </Container>
  );
};
export default GenCarousel;
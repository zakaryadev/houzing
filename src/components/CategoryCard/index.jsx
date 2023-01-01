import React from "react";
import {Blur, Container, Content, Icons, Img} from "./style";
import noImg from '../../assets/img/category.png';
export const CategoryCard = ({ data ={} }) => {
  const { imgUrl, name} = data;
  return (
    <Container>
        <Img src={(imgUrl ) || noImg}  />
        <Blur />
        <Content>
            <Icons.HouseIcon />
            <div className='categoryTitle'>{name ||"Category Name"}</div>
        </Content>
    </Container>
  );
};
export default CategoryCard;

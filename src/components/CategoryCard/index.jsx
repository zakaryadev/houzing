import React from "react";
import {Blur, Container, Content, Icons, Img} from "./style";
import noImg from '../../assets/img/category.png';
export const CategoryCard = ({ onClick, data= {} }) => {
  const { imgUrl, name} = data;
  return (
    <Container onClick={onClick}>
        <Img src={(imgUrl ) || noImg}  />
        <Blur />
        <Content>
            <Icons.HouseIcon />
            <div className='categoryTitle'>{name.toString().toLocaleUpperCase() ||"Category Name"}</div>
        </Content>
    </Container>
  );
};
export default CategoryCard;

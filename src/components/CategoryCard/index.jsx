import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Blur} from './style'
import categoryimg from '../../assets/img/category.png'

export const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={categoryimg || noimg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};
export default CategoryCard
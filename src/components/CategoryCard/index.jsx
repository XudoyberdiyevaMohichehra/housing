import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Blur, Icons } from './style'
import category from '../../assets/img/category.png'


export const CategoryCard =({data = {}})=>{
  const { name } = data;
  
  return(
    <Container>
      <Img src={category || noimg }/>
      <Blur/>
      <Content>
        {name || 'Category name'}
      </Content> 
    </Container>
  )
}
export default CategoryCard
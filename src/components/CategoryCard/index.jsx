import React from "react";
import noimg from '../../assets/img/noimg.jpeg'
import { Container, Img, Content, Blur} from './style'
import category from '../../assets/img/category.png'
import {data} from '../../utils/data'

export const CategoryCard =({data1 = {}})=>{
  const { name, onClick } = data1;
  
  return(
    <Container onClick={onClick}>
      <Img src={category || noimg }/>
      <Blur/>
      <Content>
        {name || 'Category name'}
      </Content> 
    </Container>
  )
}
export default CategoryCard
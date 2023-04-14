import React from "react";
import { Container, HouseContainer } from './style'
import GenCarousel from '../Carousel'
import Category from '../Category'

export const Home =()=>{
  return(
    <Container>
      <GenCarousel/>
      <HouseContainer>
        <Category/>
      </HouseContainer>
    </Container>
  )
}
export default Home
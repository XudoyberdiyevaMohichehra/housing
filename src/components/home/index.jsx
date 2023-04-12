import React from "react";
import { Container, HouseContainer } from './style'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'
import CategoryCard from '../CategoryCard'

export const Home =()=>{
  return(
    <Container>
      <GenCarousel/>
      <HouseContainer>
        {/* <HouseCard /> */}
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </HouseContainer>
    </Container>
  )
}
export default Home
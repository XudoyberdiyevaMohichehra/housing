import React from "react";
import { Container, HouseContainer } from './style'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'

export const Home =()=>{
  return(
    <Container>
      <GenCarousel/>
      <HouseContainer>
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </HouseContainer>
    </Container>
  )
}
export default Home
import React from "react";
import { Blur, Container, Content, Img } from "./style";
import {Button } from "../Generics/Button";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  return (
    <Container>
        <Img src={img2} />
      <Blur />
      <Content>
        <Content.Title>Vermont Farmhouse With Antique Jail Is
          the Week's Most Popular Home</Content.Title>
           <Button width={180}>Read More</Button> 
      </Content>
     
    </Container>
  );
};

export default GenCarousel;
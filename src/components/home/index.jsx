import React from "react";
import {Container} from './style'
import { Input, Button } from "../Generics/index.jsx";

export const Home =()=>{
  return(
    <Container>
      <h1>Home</h1>
      <Input width={200} />
      {/* <Button>click</Button> */}
    </Container>
  )
}
export default Home
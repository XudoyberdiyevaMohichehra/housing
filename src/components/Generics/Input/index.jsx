import React from "react";
import {Container} from './style'

export const Input =({type,children, onChange, ...res })=>{
  return(
    <Container {...res} type={type} onClick={onChange}>
      
    </Container>
  )
}
export default Input
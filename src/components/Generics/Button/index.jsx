import React from "react";
import {Container} from './style'

export const Button =({type,children, onClick, ...res })=>{
  return(
    <Container {...res} type={type} onClick={onClick}>
      {children || 'Generic button'}
    </Container>
  )
}
export default Button
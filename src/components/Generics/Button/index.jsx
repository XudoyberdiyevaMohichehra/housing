import React from "react";
import {Container} from './style'

export const Button =({type,children, onClick, disabled, ...res })=>{
  return(
    <Container disabled={disabled} {...res} type={type} onClick={onClick}>
      {children || 'Generic button'}
    </Container>
  )
}
export default Button
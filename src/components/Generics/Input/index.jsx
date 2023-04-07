import React from "react";
import { Container, Icon, Wrapper } from './style'

export const Input =({icon,children, onChange, ...res })=>{
  return(
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container  icon={icon} onChange={onChange} {...res} />
    </Wrapper>
  )
}
export default Input

// import React, { forwardRef } from "react";
// import { Container, Icon, Wrapper } from "./style";

// const Input = forwardRef(({ icon, onChange, ...res }, ref) => {
//   return (
//     <Wrapper>
//       <Icon>{icon}</Icon>
//       <Container ref={ref} icon={icon} onChange={onChange} {...res} />
//     </Wrapper>
//   );
// });

// export default Input;
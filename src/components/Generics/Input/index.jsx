import React, {forwardRef} from "react";
import { Container, Icon, Wrapper } from './style'


const Input = forwardRef(({type, defaultValue, icon, onChange, ...res }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container type={type} defaultValue={defaultValue} ref={ref} icon={icon} onChange={onChange} {...res} />
    </Wrapper>
  );
});

export default Input;
import React, {forwardRef} from "react";
import { Container, Icon, Wrapper } from './style'


const Input = forwardRef(({defaultValue, icon, onChange, ...res }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container defaultValue={defaultValue} ref={ref} icon={icon} onChange={onChange} {...res} />
    </Wrapper>
  );
});

export default Input;
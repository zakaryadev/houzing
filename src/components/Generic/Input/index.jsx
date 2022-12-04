import React, { forwardRef } from 'react';
import {Container, Wrapper, Icon} from './style';


export const Input = forwardRef(({ onChange, defaultValue, placeholder, name, width, height, icon }, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        placeholder={placeholder}
        name={name}
        icon={icon}
        defaultValue={defaultValue}
        onChange={onChange}
        width={width}
        height={height}
        ref={ref}
      />
    </Wrapper>
  );
})
export default Input;

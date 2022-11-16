import React from 'react';
import { Container } from './style';

export const Input = ({ onChange, defaultValue, placeholder, name, width, height, icon }) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
      width={width}
      height={height}
    />
  );
};

export default Input;

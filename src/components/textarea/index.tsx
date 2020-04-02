import React from 'react';
import { InputProps } from './types';
import * as styled from './styles';

export const Textarea: React.FC<InputProps> = ({
  id,
  name,
  title,
  onChange,
  required
}) => {
  return (
    <label htmlFor={id}>
      <styled.Label>{title}</styled.Label>
      <styled.Textarea
        id={id}
        name={name}
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

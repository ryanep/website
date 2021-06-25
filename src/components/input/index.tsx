import React from 'react';
import { InputProps } from './types';
import * as styled from './styles';

export const Input: React.FC<InputProps> = React.memo(
  ({ id, type, name, title, onChange, required }) => {
    return (
      <label htmlFor={id}>
        <styled.Label>{title}</styled.Label>
        <styled.Input
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          required={required}
        />
      </label>
    );
  }
);

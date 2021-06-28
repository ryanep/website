import React from 'react';
import { TextareaProps } from './types';
import * as styled from './styles';

export const Textarea = React.memo(
  ({ id, name, title, rows = 5, onChange, required }: TextareaProps) => {
    return (
      <label htmlFor={id}>
        <styled.Label>{title}</styled.Label>
        <styled.Textarea
          id={id}
          name={name}
          onChange={onChange}
          required={required}
          rows={rows}
        />
      </label>
    );
  }
);

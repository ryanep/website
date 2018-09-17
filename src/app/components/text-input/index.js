import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const TextInput = ({ label, name, value, required, onChange }) => (
  <styled.Label htmlFor={`text-${name}`}>
    {label}
    <styled.Input
      type="text"
      id={`text-${name}`}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    />
  </styled.Label>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Textarea = ({ label, name, value, required, onChange }) => (
  <styled.Label htmlFor={`textarea-${name}`}>
    {label}
    <styled.Input
      id={`textarea-${name}`}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  </styled.Label>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = {};

export default Textarea;

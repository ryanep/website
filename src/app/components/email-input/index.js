import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const EmailInput = ({ label, name, value, required, onChange }) => (
  <styled.Label htmlFor={`email-${name}`}>
    {label}
    <styled.Input
      type="email"
      id={`email-${name}`}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    />
  </styled.Label>
);

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EmailInput;

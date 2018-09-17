import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TextInput = ({ label, name, value, required, onChange }) => (
  <label htmlFor={`text-${name}`} className={styles.label}>
    {label}
    <input
      type="text"
      id={`text-${name}`}
      name={name}
      value={value}
      required={required}
      className={styles.input}
      onChange={onChange}
    />
  </label>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;

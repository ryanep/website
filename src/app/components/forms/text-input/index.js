import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TextInput = ({ label, name, required, onChange }) =>
  <label className={styles.label}>
    {label}
    <input
      type="text"
      name={name}
      required={required}
      className={styles.input}
      onChange={onChange}
    />
  </label>;

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;

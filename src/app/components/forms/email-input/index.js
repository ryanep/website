import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const EmailInput = ({ label, name, value, required, onChange }) => (
  <label htmlFor={`email-${name}`} className={styles.label}>
    {label}
    <input
      type="email"
      id={`email-${name}`}
      name={name}
      value={value}
      required={required}
      className={styles.input}
      onChange={onChange}
    />
  </label>
);

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EmailInput;

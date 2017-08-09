import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const EmailInput = ({ label, name, required, onChange }) =>
  <label className={styles.label}>
    {label}
    <input
      type="email"
      name={name}
      required={required}
      className={styles.input}
      onChange={onChange}
    />
  </label>;

EmailInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EmailInput;

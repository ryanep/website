import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Textarea = ({ label, name, value, required, onChange }) =>
  <label className={styles.label}>
    {label}
    <textarea
      name={name}
      required={required}
      value={value}
      className={styles.input}
      onChange={onChange}
    />
  </label>;

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textarea;

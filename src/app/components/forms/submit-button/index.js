import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@components/loader';
import styles from './style.scss';

const SubmitButton = ({ name, isLoading }) => (
  <button
    type="submit"
    className={isLoading ? `${styles.button} ${styles.loading}` : styles.button}
    disabled={isLoading}
  >
    {name}
    {isLoading && <Loader />}
  </button>
);

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default SubmitButton;

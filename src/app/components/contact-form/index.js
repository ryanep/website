import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '@components/forms/text-input';
import EmailInput from '@components/forms/email-input';
import Textarea from '@components/forms/textarea';
import SubmitButton from '@components/forms/submit-button';
import Wrap from '@components/wrap';
import styles from './style.scss';

const ContactForm = ({
  title,
  desc,
  buttonText,
  isLoading,
  onInputChange,
  onSubmit
}) =>
  <div id={'contact'} className={styles.contact}>
    <Wrap width={'84rem'}>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.desc}>
        {desc}
      </p>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.sections}>
          <div className={styles.left}>
            <TextInput
              label="Name"
              name="name"
              required={true}
              onChange={onInputChange}
            />
            <TextInput
              label="Subject"
              name="subject"
              required={true}
              onChange={onInputChange}
            />
            <EmailInput
              label="Email address"
              name="email"
              required={true}
              onChange={onInputChange}
            />
          </div>
          <div className={styles.right}>
            <Textarea
              label="Message"
              name="message"
              required={true}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <SubmitButton name={buttonText} isLoading={isLoading} />
        </div>
      </form>
    </Wrap>
  </div>;

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;

import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '@components/text-input';
import EmailInput from '@components/email-input';
import Textarea from '@components/textarea';
import Button from '@components/button';
import Wrap from '@components/wrap';
import * as styled from './styled';

const ContactForm = ({
  title,
  desc,
  buttonText,
  isLoading,
  onInputChange,
  onSubmit,
  inputs
}) => (
  <styled.Contact id="contact">
    <Wrap width="84rem">
      <styled.Heading>{title}</styled.Heading>
      <styled.Description>{desc}</styled.Description>

      <styled.Form onSubmit={onSubmit}>
        <styled.Sections>
          <styled.Section>
            <TextInput
              label="Name"
              name="name"
              value={inputs.name}
              onChange={onInputChange}
              required
            />
            <TextInput
              label="Subject"
              name="subject"
              value={inputs.subject}
              onChange={onInputChange}
              required
            />
            <EmailInput
              label="Email address"
              name="email"
              value={inputs.email}
              onChange={onInputChange}
              required
            />
          </styled.Section>
          <styled.Section>
            <Textarea
              label="Message"
              name="message"
              value={inputs.message}
              onChange={onInputChange}
              required
            />
          </styled.Section>
        </styled.Sections>
        <styled.Buttons>
          <Button name={buttonText} type="submit" isLoading={isLoading} />
        </styled.Buttons>
      </styled.Form>
    </Wrap>
  </styled.Contact>
);

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.object.isRequired
};

ContactForm.defaultProps = {};

export default ContactForm;

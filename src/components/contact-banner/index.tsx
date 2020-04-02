import React, { useState } from 'react';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { Wrap } from '~/components/wrap';
import { Input } from '~/components/input';
import { Textarea } from '~/components/textarea';
import { Button } from '~/components/button';
import { ContactBannerProps, ContactFormData } from './types';
import * as styled from './styles';

export const ContactBanner: React.FC<ContactBannerProps> = ({
  heading,
  description
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    subject: '',
    emailAddress: '',
    message: ''
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailToLink = `mailto:ryan@ryanep.com?subject=${formData.subject}&body=${formData.message}`;
    window.location.href = mailToLink;
  };

  return (
    <styled.Banner>
      <Wrap>
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <styled.Form onSubmit={handleFormSubmit}>
          <Input
            id="contact-subject"
            title="Subject"
            type="text"
            name="name"
            onChange={handleInputChange}
            required
          />
          <Spacer size="small" />
          <Input
            id="contact-form-name"
            title="Name"
            type="text"
            name="subject"
            onChange={handleInputChange}
            required
          />
          <Spacer size="small" />
          <Textarea
            id="contact-form-name"
            title="Message"
            name="message"
            onChange={handleInputChange}
            required
          />
          <Spacer size="large" />
          <styled.Button>
            <Button type="submit" text="Send message" />
          </styled.Button>
        </styled.Form>
      </Wrap>
    </styled.Banner>
  );
};

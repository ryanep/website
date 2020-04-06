import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { Wrap } from '~/components/wrap';
import { Input } from '~/components/input';
import { Textarea } from '~/components/textarea';
import { Button } from '~/components/button';
import { ContactBannerProps, ContactFormData } from './types';
import * as styled from './styles';

export const ContactBanner: React.FC<ContactBannerProps> = React.memo(({
  heading,
  description
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    subject: '',
    body: ''
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
    const mailToLink = `mailto:ryan@ryanep.com?subject=${formData.subject}&body=${formData.body}`;
    window.location.href = mailToLink;
  };

  return (
    <styled.Banner>
      <Wrap>
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <styled.Form onSubmit={handleFormSubmit} action="mailto:ryan@ryanep.com" method="get">
          <Input
            id="contact-form-name"
            title={t('contactForm:nameLabel')}
            type="text"
            name="subject"
            onChange={handleInputChange}
            required
          />
          <Spacer size="small" />
          <Input
            id="contact-form-subject"
            title={t('contactForm:subjectLabel')}
            type="text"
            name="name"
            onChange={handleInputChange}
            required
          />
          <Spacer size="small" />
          <Textarea
            id="contact-form-message"
            title={t('contactForm:messageLabel')}
            name="body"
            onChange={handleInputChange}
            required
          />
          <Spacer size="large" />
          <styled.Button>
            <Button type="submit" text={t('contactForm:buttonTitle')} />
          </styled.Button>
        </styled.Form>
      </Wrap>
    </styled.Banner>
  );
});

import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Input } from "#/components/input";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Textarea } from "#/components/textarea";
import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { ContactBannerProps, ContactFormData } from "./types";

export const ContactBanner = ({ heading, description }: ContactBannerProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    subject: "",
    body: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailToLink = `mailto:ryan@ryanep.com?subject=${formData.subject}&body=${formData.body}`;
    window.location.href = mailToLink;
  };

  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Form
          action="mailto:ryan@ryanep.com"
          method="get"
          onSubmit={handleFormSubmit}
        >
          <styled.Groups>
            <styled.Group>
              <Input
                id="contact-form-name"
                name="subject"
                onChange={handleInputChange}
                required
                title={t("contactForm:nameLabel")}
                type="text"
              />
              <Spacer size="small" />
              <Input
                id="contact-form-subject"
                name="name"
                onChange={handleInputChange}
                required
                title={t("contactForm:subjectLabel")}
                type="text"
              />
            </styled.Group>

            <styled.Group>
              <Textarea
                id="contact-form-message"
                name="body"
                onChange={handleInputChange}
                required
                title={t("contactForm:messageLabel")}
              />
            </styled.Group>
          </styled.Groups>

          <Spacer size="large" />

          <styled.Button>
            <Button text={t("contactForm:buttonTitle")} type="submit" />
          </styled.Button>
        </styled.Form>
      </Wrap>
    </Section>
  );
};

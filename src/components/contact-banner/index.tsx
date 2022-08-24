import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { Input } from "#/components/input";
import { Textarea } from "#/components/textarea";
import { Button } from "#/components/button";
import { Section } from "#/components/section";
import { ContactBannerProps, ContactFormData } from "./types";
import * as styled from "./styles";

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
        <Heading type="h2" text={heading} />
        <Spacer size="medium" />

        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />

        <styled.Form
          onSubmit={handleFormSubmit}
          action="mailto:ryan@ryanep.com"
          method="get"
        >
          <styled.Groups>
            <styled.Group>
              <Input
                id="contact-form-name"
                title={t("contactForm:nameLabel")}
                type="text"
                name="subject"
                onChange={handleInputChange}
                required
              />
              <Spacer size="small" />
              <Input
                id="contact-form-subject"
                title={t("contactForm:subjectLabel")}
                type="text"
                name="name"
                onChange={handleInputChange}
                required
              />
            </styled.Group>

            <styled.Group>
              <Textarea
                id="contact-form-message"
                title={t("contactForm:messageLabel")}
                name="body"
                onChange={handleInputChange}
                required
              />
            </styled.Group>
          </styled.Groups>

          <Spacer size="large" />

          <styled.Button>
            <Button type="submit" text={t("contactForm:buttonTitle")} />
          </styled.Button>
        </styled.Form>
      </Wrap>
    </Section>
  );
};

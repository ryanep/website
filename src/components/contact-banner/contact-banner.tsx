import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Input } from "#/components/input";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Textarea } from "#/components/textarea";
import { Wrap } from "#/components/wrap";
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

        <p className="mx-auto max-w-4xl">{description}</p>
        <Spacer size="large" />

        <form
          action="mailto:ryan@ryanep.com"
          className="text-left"
          method="get"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-3 md:flex-row md:gap-5">
            <div className="md:w-1/2">
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
            </div>

            <div className="md:w-1/2">
              <Textarea
                id="contact-form-message"
                name="body"
                onChange={handleInputChange}
                required
                title={t("contactForm:messageLabel")}
              />
            </div>
          </div>

          <Spacer size="large" />

          <div className="text-center">
            <Button text={t("contactForm:buttonTitle")} type="submit" />
          </div>
        </form>
      </Wrap>
    </Section>
  );
};

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Root } from "#/components/root";
import { TitleBanner } from "#/components/title-banner";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Helmet>
        <title>{t("contact:pageTitle")}</title>
      </Helmet>
      <TitleBanner heading={t("contact:titleBanner.heading")} />
    </Root>
  );
};

export default ContactPage;

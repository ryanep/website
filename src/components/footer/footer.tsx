import { useTranslation } from "react-i18next";
import { Wrap } from "#/components/wrap";
import { getCurrentYear } from "#/utils/date";

export const Footer = () => {
  const { t } = useTranslation();
  const year = getCurrentYear();

  return (
    <footer className="bg-primary p-5 text-center text-sm font-medium text-white transition-colors dark:bg-primary-dark">
      <Wrap>{t("footer:copyright", { year })}</Wrap>
    </footer>
  );
};

import { useTranslation } from "react-i18next";
import { Wrap } from "#/components/wrap";
import { getCurrentYear } from "#/utils/date";

export const Footer = () => {
  const { t } = useTranslation();
  const year = getCurrentYear();

  return (
    <footer className="p-5 bg-primary dark:bg-primary-dark text-center text-xs text-white transition-colors">
      <Wrap>{t("footer:copyright", { year })}</Wrap>
    </footer>
  );
};

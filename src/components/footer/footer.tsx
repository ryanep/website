import { Wrap } from "#/components/wrap";
import { getTranslation } from "#/i18n/server";
import { getCurrentYear } from "#/utils/date";

export const Footer = async () => {
  const { t } = await getTranslation();
  const year = getCurrentYear();

  return (
    <footer className="bg-primary p-5 text-center text-sm font-medium text-white transition-colors dark:bg-primary-dark">
      <Wrap>{t("footer.copyright", { year })}</Wrap>
    </footer>
  );
};

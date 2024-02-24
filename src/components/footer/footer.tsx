import { Wrap } from "#/components/wrap";
import { getTranslation } from "#/i18n/server";
import { getCurrentYear } from "#/utils/date";

export const Footer = async () => {
  const { t } = await getTranslation();
  const year = getCurrentYear();

  return (
    <footer className="bg-primary py-5 text-center text-sm font-medium text-white transition-colors md:text-left dark:bg-primary-dark">
      <Wrap>
        <div className="flex flex-col gap-4 md:flex-row">
          {t("footer.copyright", { year })}

          <ul className="mx-auto inline-flex gap-4 md:ml-auto md:mr-0">
            <li>
              <a className="hover:underline" href="//github.com/ryanep">
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:underline" href="//linkedin.com/in/ryanep">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Wrap>
    </footer>
  );
};

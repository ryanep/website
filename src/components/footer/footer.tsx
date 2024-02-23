import { Wrap } from "#/components/wrap";
import { getTranslation } from "#/i18n/server";
import { getCurrentYear } from "#/utils/date";

export const Footer = async () => {
  const { t } = await getTranslation();
  const year = getCurrentYear();

  return (
    <footer className="bg-primary p-5 text-sm font-medium text-white transition-colors dark:bg-primary-dark">
      <Wrap>
        <div className="flex">
          {t("footer.copyright", { year })}

          <ul className="ml-auto flex gap-4">
            <li>
              <a className="hover:underline" href="//github.com/ryanep">
                Github
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

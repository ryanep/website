import { cx } from "classix";
import { Link } from "#/components/link";
import { Logo } from "#/components/logo";
import { Navigation } from "#/components/navigation";
import { Wrap } from "#/components/wrap";
import { getTranslation } from "#/i18n/server";

interface HeaderProps {
  readonly isNavEnabled?: boolean;
  readonly isWithBackground?: boolean;
}

export const Header = async ({
  isNavEnabled = false,
  isWithBackground = false,
}: HeaderProps) => {
  const { t } = await getTranslation();

  const navLinks = [
    {
      title: t("navigation.home"),
      url: "/",
    },
    {
      title: t("navigation.blog"),
      url: "/blog",
    },
    {
      title: t("navigation.now"),
      url: "/now",
    },
    {
      title: t("navigation.uses"),
      url: "/uses",
    },
  ];
  return (
    <header
      className={cx(
        "w-full",
        isWithBackground && "bg-primary dark:bg-primary-dark"
      )}
    >
      <Wrap className="flex h-16 items-center">
        <Link className="mr-auto" to="/">
          <Logo />
        </Link>

        {isNavEnabled ? <Navigation links={navLinks} /> : null}
      </Wrap>
    </header>
  );
};

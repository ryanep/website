import { cx } from "classix";
import { Link } from "#/components/link";
import { Logo } from "#/components/logo";
import { Navigation } from "#/components/navigation";
import { Wrap } from "#/components/wrap";

interface HeaderProps {
  readonly isNavEnabled?: boolean;
  readonly isWithBackground?: boolean;
}

const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Now",
    url: "/now",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export const Header = ({
  isNavEnabled = false,
  isWithBackground = false,
}: HeaderProps) => {
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

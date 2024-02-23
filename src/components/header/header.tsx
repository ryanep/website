import { Link } from "#/components/link";
import { Logo } from "#/components/logo";
import { Navigation } from "#/components/navigation";
import { Wrap } from "#/components/wrap";

interface HeaderProps {
  readonly isNavEnabled: boolean;
  readonly navLinks: {
    title: string;
    url: string;
  }[];
}

export const Header = ({ isNavEnabled, navLinks }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-30 w-full">
      <Wrap className="flex h-16 items-center">
        <Link className="mr-auto" to="/">
          <Logo />
        </Link>

        {isNavEnabled ? <Navigation links={navLinks} /> : null}
      </Wrap>
    </header>
  );
};

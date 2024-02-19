import { Link } from "#/components/link";
import { Logo } from "#/components/logo";
import { Navigation } from "#/components/navigation";
import { Wrap } from "#/components/wrap";

interface HeaderProps {
  readonly navLinks: {
    title: string;
    url: string;
  }[];
  readonly showNav: boolean;
}

export const Header = ({ navLinks, showNav }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-30 w-full">
      <Wrap className="flex h-16 items-center">
        <Link className="mr-auto" to="/">
          <Logo />
        </Link>

        {showNav ? <Navigation links={navLinks} /> : null}
      </Wrap>
    </header>
  );
};

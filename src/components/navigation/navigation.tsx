import { Link } from "#/components/link";

interface NavigationProps {
  readonly links: {
    title: string;
    url: string;
  }[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="h-full">
      <ul className="flex h-full gap-8">
        {links.map((link) => (
          <li key={link.url}>
            <Link
              className="flex h-full items-center text-base font-bold text-white no-underline transition-colors hover:underline"
              to={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

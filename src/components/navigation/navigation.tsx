import { Link } from "#/components/link";

interface NavigationProps {
  readonly links: {
    title: string;
    url: string;
  }[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex">
        {links.map((link) => (
          <li className="ml-10 first:ml-0" key={link.url}>
            <Link
              className="block text-sm font-semibold text-white no-underline hover:underline"
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

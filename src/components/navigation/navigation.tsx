import { Link } from "#/components/link";
import type { NavigationProps } from "./types";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex">
        {links
          ? links.map((link) => (
              <li className="ml-10 first:ml-0" key={link.url}>
                <Link
                  className="text-sm font-semibold text-white no-underline hover:underline"
                  to={link.url}
                >
                  {link.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

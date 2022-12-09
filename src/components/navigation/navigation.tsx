import GatsbyLink from "gatsby-link";
import { NavigationProps } from "./types";

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex">
        {links
          ? links.map((link) => (
              <li className="ml-10 first:ml-0" key={link.url}>
                <GatsbyLink
                  className="text-white text-sm font-semibold no-underline hover:underline"
                  to={link.url}
                >
                  {link.title}
                </GatsbyLink>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

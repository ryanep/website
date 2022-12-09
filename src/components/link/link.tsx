import { Link as GatsbyLink } from "gatsby";
import type { LinkProps } from "./types";

export const Link = ({ to, className, children }: LinkProps) => {
  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );
};

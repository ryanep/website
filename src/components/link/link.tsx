import { Link as GatsbyLink } from "gatsby";
import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

export const Link = ({ children, className, to }: LinkProps) => {
  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );
};

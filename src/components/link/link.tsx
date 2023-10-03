import { Link as GatsbyLink } from "gatsby";
import type { ReactNode } from "react";

interface LinkProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly to: string;
}

export const Link = ({ children, className, to }: LinkProps) => {
  return (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );
};

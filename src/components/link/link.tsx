import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly to: string;
}

export const Link = ({ children, className, to }: LinkProps) => {
  return (
    <NextLink className={className} href={to}>
      {children}
    </NextLink>
  );
};

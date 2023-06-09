import { clsx } from "clsx";
import type { ReactNode } from "react";

interface WrapProps {
  children: ReactNode;
  className?: string;
}

export const Wrap = ({ children, className }: WrapProps) => {
  return (
    <div className={clsx("mx-auto max-w-5xl px-6", className)}>{children}</div>
  );
};

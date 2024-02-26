import { cx } from "classix";
import type { ReactNode } from "react";

interface WrapProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export const Wrap = ({ children, className }: WrapProps) => {
  return (
    <div className={cx("mx-auto max-w-5xl px-6", className)}>{children}</div>
  );
};

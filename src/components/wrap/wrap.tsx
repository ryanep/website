import { clsx } from "clsx";
import type { WrapProps } from "./types";

export const Wrap = ({ className, children }: WrapProps) => {
  return (
    <div className={clsx("mx-auto max-w-5xl px-6", className)}>{children}</div>
  );
};

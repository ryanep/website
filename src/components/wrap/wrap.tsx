import { clsx } from "clsx";
import { WrapProps } from "./types";

export const Wrap = ({ className, children }: WrapProps) => {
  return (
    <div className={clsx("mx-auto px-6 max-w-5xl", className)}>{children}</div>
  );
};

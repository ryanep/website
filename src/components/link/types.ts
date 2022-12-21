import type { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

import type { ReactNode } from "react";

export interface LinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

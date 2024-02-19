import type { ReactNode } from "react";

interface ProvidersProps {
  readonly children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return children;
};

import { ConfigContextProvider } from "#/context/config";
import type { ReactNode } from "react";

interface ProvidersProps {
  readonly children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <ConfigContextProvider>{children}</ConfigContextProvider>;
};

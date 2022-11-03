import { ConfigContextProvider } from "#/context/config";
import type { ProvidersProps } from "./types";

export const Providers = ({ children }: ProvidersProps) => {
  return <ConfigContextProvider>{children}</ConfigContextProvider>;
};

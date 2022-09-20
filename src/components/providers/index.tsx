import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigContextProvider } from "#/context/config";
import { useConfigContext } from "#/hooks/context/config";
import { lightTheme, darkTheme } from "#/styles/theme";
import type { ProvidersProps } from "./types";

const StyledProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useConfigContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ConfigContextProvider>
      <StyledProvider>{children}</StyledProvider>
    </ConfigContextProvider>
  );
};

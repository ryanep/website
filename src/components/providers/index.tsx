import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '#/styles/theme';
import { ConfigContextProvider } from '#/context/config';
import type { ProvidersProps } from './types';
import { useConfigContext } from '#/hooks/context/config';

const Test = ({ children }: { children: ReactNode }) => {
  const { theme } = useConfigContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ConfigContextProvider>
      <Test>{children}</Test>
    </ConfigContextProvider>
  );
};

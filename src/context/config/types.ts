import type { ReactNode } from "react";

export interface ConfigContextProviderProps {
  children: ReactNode;
}

export type Theme = "dark" | "light";

export interface ConfigContextValues {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

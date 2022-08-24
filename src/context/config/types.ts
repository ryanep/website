import { ReactNode } from "react";

export interface ConfigContextProviderProps {
  children: ReactNode;
}

export type Theme = "light" | "dark";

export interface ConfigContextValues {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

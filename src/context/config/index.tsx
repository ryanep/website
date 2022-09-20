import { createContext, useMemo, useEffect, useState } from "react";
import type { ConfigContextProviderProps, ConfigContextValues } from "./types";

export const ConfigContext = createContext<ConfigContextValues>({
  theme: "light",
  setTheme: () => {
    // Mock setTheme
  },
});

export const ConfigContextProvider = ({
  children,
}: ConfigContextProviderProps) => {
  const [theme, setTheme] = useState<ConfigContextValues["theme"]>("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    prefersDarkMode.addEventListener("change", (event) => {
      const mode = event.matches ? "dark" : "light";
      setTheme(mode);
    });

    if (prefersDarkMode.matches) {
      setTheme("dark");
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

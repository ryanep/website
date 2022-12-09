import {
  createContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { ConfigContextProviderProps, ConfigContextValues } from "./types";

export const ConfigContext = createContext<ConfigContextValues | null>(null);

export const ConfigContextProvider = ({
  children,
}: ConfigContextProviderProps) => {
  const [theme, setTheme] = useState<ConfigContextValues["theme"]>("light");

  const changeTheme = useCallback((theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(theme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    prefersDarkMode.addEventListener("change", (event) => {
      const mode = event.matches ? "dark" : "light";

      changeTheme(mode);
    });

    if (prefersDarkMode.matches) {
      changeTheme("dark");
    }
  }, [changeTheme]);

  const contextValue = useMemo(() => {
    return {
      setTheme: changeTheme,
      theme,
    };
  }, [theme, changeTheme]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

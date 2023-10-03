import {
  createContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from "react";
import type { ReactNode } from "react";

interface ConfigContextProviderProps {
  readonly children: ReactNode;
}

interface ConfigContextValue {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

type Theme = "dark" | "light";

export const ConfigContext = createContext<ConfigContextValue | null>(null);

export const ConfigContextProvider = ({
  children,
}: ConfigContextProviderProps) => {
  const [theme, setTheme] = useState<ConfigContextValue["theme"]>("light");

  const changeTheme = useCallback((updatedTheme: "dark" | "light") => {
    if (updatedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(updatedTheme);
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

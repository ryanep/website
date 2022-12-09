import { Link as GatsbyLink } from "gatsby";
import { Logo } from "#/components/logo";
import { Navigation } from "#/components/navigation";
import { Wrap } from "#/components/wrap";
import { useConfigContext } from "#/hooks/context/config";
import { HeaderProps } from "./types";

export const Header = ({ showNav, navLinks }: HeaderProps) => {
  const { theme, setTheme } = useConfigContext();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  return (
    <header className="fixed top-0 z-30 w-full">
      <Wrap className="flex h-16 items-center">
        <GatsbyLink className="mr-auto" to="/">
          <Logo />
        </GatsbyLink>
        {showNav ? <Navigation links={navLinks} /> : null}
        <button
          className="cursor-pointer"
          onClick={handleThemeToggle}
          type="button"
        >
          {theme === "light" ? (
            <svg
              height="32"
              version="1.1"
              viewBox="0 0 512 512"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248.082 263.932c-31.52-31.542-39.979-77.105-26.020-116.542-15.25 5.395-29.668 13.833-41.854 26.020-43.751 43.75-43.751 114.667 0 158.395 43.729 43.73 114.625 43.752 158.374 0 12.229-12.186 20.646-26.604 26.021-41.854-39.415 13.959-84.999 5.5-116.521-26.019z"
                fill="#ffffff"
              />
            </svg>
          ) : (
            <svg
              height="32"
              version="1.1"
              viewBox="0 0 512 512"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 144c-61.75 0-112 50.25-112 112s50.25 112 112 112 112-50.251 112-112c0-61.75-50.25-112-112-112zM256 112c8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16zM256 400c-8.854 0-16 7.167-16 16v32c0 8.854 7.146 16 16 16 8.833 0 16-7.146 16-16v-32c0-8.833-7.167-16-16-16zM380.417 154.167l22.625-22.625c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625 0l-22.625 22.625c-6.251 6.25-6.251 16.375 0 22.625 6.25 6.249 16.374 6.249 22.625 0zM131.541 357.854l-22.623 22.625c-6.252 6.25-6.252 16.376 0 22.625 6.249 6.25 16.373 6.25 22.623 0l22.625-22.625c6.251-6.291 6.251-16.375 0-22.625-6.249-6.25-16.374-6.292-22.625 0zM112 256c0-8.833-7.167-16-16-16h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16zM448 240h-32c-8.854 0-16 7.167-16 16 0 8.854 7.146 16 16 16h32c8.833 0 16-7.146 16-16 0-8.833-7.167-16-16-16zM131.521 154.167c6.249 6.25 16.375 6.25 22.625 0 6.249-6.25 6.249-16.375 0-22.625l-22.625-22.625c-6.25-6.25-16.376-6.25-22.625 0-6.25 6.25-6.25 16.375 0 22.625l22.625 22.625zM380.459 357.812c-6.293-6.25-16.376-6.25-22.625 0s-6.293 16.375 0 22.625l22.625 22.625c6.249 6.249 16.374 6.249 22.625 0 6.249-6.25 6.249-16.376 0-22.625l-22.625-22.625z"
                fill="#ffffff"
              />
            </svg>
          )}
        </button>
      </Wrap>
    </header>
  );
};

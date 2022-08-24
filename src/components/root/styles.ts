import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
  }

  body {
    min-width: 32rem;
    transition: background-color 0.3s, color 0.3s;
    background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
    color: ${({ theme }) => theme.colors.bodyColor};
    font-size: 1.6rem;
    line-height: 1.5;
  }

  select {
    appearance: none;
  }

  button, input, textarea {
    padding: 0;
    border: 0;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    appearance: none;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
  }
`;

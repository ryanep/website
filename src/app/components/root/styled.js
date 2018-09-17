import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import fonts from './fonts';

export const base = injectGlobal`
  ${reset}
  ${fonts}

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-display: fallback;
    font-size: 1.4rem;
    line-height: 1.5;
    min-width: 32rem;
    color: #555555;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    font-family: inherit;
  }

  strong {
    font-weight: bold;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

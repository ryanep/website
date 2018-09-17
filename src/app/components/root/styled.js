import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export const base = injectGlobal`
  ${reset}

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #fbfbfb;
  }

  * {
	box-sizing: border-box;

	&::before, &::after {
		box-sizing: border-box;
	}

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: #555555;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    line-height: 1.5;
    min-width: 32rem;
    -webkit-font-smoothing: antialiased;
    font-display: fallback;
  }

  input, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333333;
  }
`;

export const Root = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

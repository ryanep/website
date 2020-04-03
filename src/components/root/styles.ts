import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { colours } from '~/constants/colours';

const FONT_PATH = 'https://cdn.ryanep.com/fonts';

export const Global = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    src: url('${FONT_PATH}/montserrat/thin.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/thin.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 100;
    src: url('${FONT_PATH}/montserrat/thin-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/thin-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: url('${FONT_PATH}/montserrat/extralight.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/extralight.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 200;
    src: url('${FONT_PATH}/montserrat/extralight-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/extralight-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url('${FONT_PATH}/montserrat/light.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/light.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    src: url('${FONT_PATH}/montserrat/light-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/light-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('${FONT_PATH}/montserrat/regular.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: url('${FONT_PATH}/montserrat/italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('${FONT_PATH}/montserrat/medium.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    src: url('${FONT_PATH}/montserrat/medium-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/medium-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('${FONT_PATH}/montserrat/semibold.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: url('${FONT_PATH}/montserrat/semibold-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/semibold-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('${FONT_PATH}/montserrat/bold.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: url('${FONT_PATH}/montserrat/bold-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/${FONT_PATH}/montserrat/bold-italic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('${FONT_PATH}/montserrat/extrabold.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/extrabold.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    src: url('${FONT_PATH}/montserrat/extrabold-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/extrabold-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: url('${FONT_PATH}/montserrat/black.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/black.woff') format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    src: url('${FONT_PATH}/montserrat/black-italic.woff2') format('woff2'),
      url('${FONT_PATH}/montserrat/black-italic.woff') format('woff');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-width: 32rem;
    background-color: ${colours.alabaster};
    color: ${colours.tundora};
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

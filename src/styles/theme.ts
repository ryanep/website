export type Theme = typeof lightTheme;

const palette = {
  white: '#ffffff',
  black: '#000000',
  alto: '#dddddd',
  tundora: '#484848',
  codGray: '#111111',
  doveGray: '#666666',
  alabaster: '#f7f7f7',
  jon: '#3c1f1f',
  matrix: '#a25656',
  mineshaft: '#222222',
  silver: '#cccccc',
};

export const fontWeight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

const baseTheme = {
  fontWeight,
};

export const lightTheme = {
  ...baseTheme,
  scheme: 'light',
  colors: {
    bodyBackgroundColor: palette.white,
    altBackgroundColor: palette.alabaster,
    primary: palette.matrix,
    bodyColor: palette.tundora,
    highlightBackgroundColor: palette.white,
    highlightColor: palette.tundora,
    timelineBackgroundColor: palette.white,
    inputBackgroundColor: palette.alabaster,
  },
};

export const darkTheme = {
  ...baseTheme,
  scheme: 'dark',
  colors: {
    bodyBackgroundColor: palette.black,
    altBackgroundColor: palette.codGray,
    bodyColor: palette.silver,
    primary: palette.jon,
    highlightBackgroundColor: palette.mineshaft,
    highlightColor: palette.silver,
    timelineBackgroundColor: palette.mineshaft,
    inputBackgroundColor: palette.mineshaft,
  },
};

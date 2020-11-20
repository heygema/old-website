import merge from 'lodash/merge';

import colors from './colors';
import tags from './tags';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  // Serif-the old style font
  realSerif: `Merriweather, Georgia, Serif`,
  // Sans Serif the modern one
  realSansSerif: `'Nunito', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif`,
  // NOTE: here is I swapped type for Sans-Serif and Serif.
  serif: `Wotfard, 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif`,
  sansSerif: `'Libre Baskerville', Merriweather, Georgia, Serif`,
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

// let initialColorMode = 'light';

// if (
//   typeof window !== 'undefined' &&
//   window.matchMedia &&
//   window.matchMedia('(prefers-color-scheme: dark)').matches
// ) {
//   initialColorMode = 'dark';
// }

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
  tags,
});

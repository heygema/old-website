import { css } from '@emotion/core';
// import Wotfard from '../fonts/Wotfard_Regular_Webfont/Wotfard-Regular-webfont/wotfard-regular-webfont.ttf';

/*

wotfard
  @font-face {
    font-family: 'Wotfard';
    src: url(${Wotfard}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


*/

const linkStrokeStuff = `
:root {
  --text: #2B3044;
  --line: #BBC1E1;
  --line-active: #275EFE;
}

.sketchLink {
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: inherit;
  margin: 0 var(--spacing, 0px);
  -webkit-transition: margin .25s;
  transition: margin .25s;
}

.sketchLink > svg {
  width: 76px;
  height: 40px;
  position: absolute;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 7px) translateZ(0);
          transform: translate(-50%, 7px) translateZ(0);
  fill: none;
  stroke: var(--stroke, var(--line));
  stroke-linecap: round;
  stroke-width: 2px;
  stroke-dasharray: var(--offset, 69px) 278px;
  stroke-dashoffset: 361px;
  -webkit-transition: stroke 0.25s ease var(--stroke-delay, 0s), stroke-dasharray 0.35s;
  transition: stroke 0.25s ease var(--stroke-delay, 0s), stroke-dasharray 0.35s;
}

 .sketchLink:hover {
  --spacing: 4px;
  --stroke: var(--line-active);
  --stroke-delay: .1s;
  --offset: 180px;
  stroke-width: 2px;
}


`;

export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @import url('https://use.typekit.net/hfy7jzr.css');

  @font-face {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'San Francisco',
      'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI',
      'Arial', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: 'Dm Sans', '-apple-system', 'BlinkMacSystemFont',
      'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto',
      'Segoe UI', 'Arial', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: Nunito, '-apple-system', 'BlinkMacSystemFont', 'San Francisco',
      'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI',
      'Arial', sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type='number'] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }

  /* Standard syntax */
  @keyframes infinite-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /* Standard syntax */
  @keyframes back-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      -moz-transform: rotate(-360deg);
      -ms-transform: rotate(-360deg);
      -o-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }

  @keyframes infinite-scale {
    0% {
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      -o-transform: scale(0.8);
      transform: scale(0.8);
    }
    50% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.8);
      -moz-transform: scale(0.8);
      -ms-transform: scale(0.8);
      -o-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
  ${linkStrokeStuff}
`;

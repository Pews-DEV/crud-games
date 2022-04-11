import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --purple-400: #362E3C;
    --purple-800: #0C040D;

    --spacing-0: 0;
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 10px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-7: 40px;
    --spacing-8: 48px;
    --spacing-9: 56px;
    --spacing-10: 64px;
    --spacing-11: 72px;
    --spacing-12: 80px;
    --spacing-13: 88px;
    --spacing-14: 96px;
    --spacing-15: 104px;
    --spacing-16: 120px;
    --spacing-17: 136px;
    --spacing-18: 152px;

    --fontsize-massive: 64px;
    --fontsize-giant: 48px;
    --fontsize-huge: 40px;
    --fontsize-big: 32px;
    --fontsize-extralarge: 24px;
    --fontsize-large: 20px;
    --fontsize-medium: 16px;
    --fontsize-small: 14px;
    --fontsize-extrasmall: 13px;
    --fontsize-label: 12px;

    --fw-light: 300;
    --fw-regular: 400;
    --fw-semibold: 500;
    --fw-bold: 700;
    --fw-extrabold: 900;
  }

  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    color: var(--black);
    font-family: 'Poppins', 'Open Sans', sans-serif;
    width: 100%;
    font-size: 87.5%; // 14px

    @media (max-width: 720px) {
      font-size: 81.25%; // 13px
    }
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
  }

  a {
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }

  .hide {
    display: none !important;
  }
`;

export default GlobalStyles;

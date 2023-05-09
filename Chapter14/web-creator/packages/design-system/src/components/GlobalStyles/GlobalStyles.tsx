import { customThemesCssVars } from '../../theme'
import poppins from './fonts/poppins'

const fontStyles = `
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: url(${poppins});
  }
`

const externalStyles = `
  @import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
`

const htmlReset = `
  * {
    outline: none;
  }
  body {
    font-family: Poppins;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  input {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0px 1000px var(--inputBackground) inset;
      -webkit-text-fill-color: var(--inputColor);
    }
  }
`

const keyframes = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const GlobalStyles = `
  ${externalStyles}
  ${htmlReset}
  ${fontStyles}
  ${keyframes}
  ${customThemesCssVars}
`
export default GlobalStyles

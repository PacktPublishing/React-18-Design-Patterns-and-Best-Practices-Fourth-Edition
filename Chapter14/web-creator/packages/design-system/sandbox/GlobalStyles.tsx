import { createGlobalStyle } from 'styled-components'

import { customThemesCssVars } from '../src/theme'
import cssVariables from '../src/theme/cssVariables'
import poppins from './fonts/poppins'

const fontStyles = `
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: url(${poppins});
  }
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
`

const GlobalStyles = createGlobalStyle`
  ${htmlReset}
  ${fontStyles}
  ${customThemesCssVars}
  ${cssVariables}
`

export default GlobalStyles

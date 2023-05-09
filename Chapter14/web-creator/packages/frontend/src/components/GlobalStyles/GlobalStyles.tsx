import { globalStyles, v } from '@web-creator/design-system'
import { createGlobalStyle } from 'styled-components'

const bodyBg = `
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
  body {
    background-color: ${v('zirconOrMirage')};
    color: ${v('codGrayOrWhite')};
  }
`

export default GlobalStyle

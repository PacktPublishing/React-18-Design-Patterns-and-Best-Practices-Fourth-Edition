import styled, { CSSObject } from 'styled-components'

import { getClass, mapColorStyles, themeCssVars } from '../../theme'
import { Colors, FontWeight, Shape } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'badge'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
  borderColor: 'dark',
  color: 'contrastText'
})

// Shape
const shapeStyles: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '2rem'
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0
  }
}

// Styles
export namespace CSS {
  export const Badge = styled.span`
    border: 1px solid inherit;
    border-radius: 0.25rem;
    display: inline-block;
    font-size: 75%;
    font-weight: ${FontWeight.normal};
    line-height: 1;
    padding: 0.3em 0.45em;
    vertical-align: baseline;
    text-align: center;
    white-space: nowrap;
    ${colorStyles}
    ${shapeStyles}
  `
}

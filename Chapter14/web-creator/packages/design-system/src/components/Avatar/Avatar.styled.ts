import styled, { CSSObject } from 'styled-components'

import { getClass, mapColorStyles, themeCssVars } from '../../theme'
import { Colors, FontSize, FontWeight, Shape } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'alert'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
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

// Component
export namespace CSS {
  export const Avatar = styled.div`
    font-size: ${FontSize.medium};
    font-weight: ${FontWeight.heavy};
    height: 40px;
    line-height: 40px;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 40px;
    ${colorStyles}
    ${shapeStyles}
  `
}

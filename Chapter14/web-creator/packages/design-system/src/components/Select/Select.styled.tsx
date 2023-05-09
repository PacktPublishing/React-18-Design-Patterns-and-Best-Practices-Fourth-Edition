import styled from 'styled-components'

import { mapColorStyles, namedColors, themeCssVars } from '../../theme'
import { Colors, FontSize } from '../../types'

interface IStyledProps {
  top?: string
}

const { shuttleGray, outerSpace, whiteLilac, white, black } = namedColors

// Base Class Name
export const BASE_CLASS_NAME = 'select'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
  color: 'contrastText'
})

export namespace CSS {
  export const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${black};
    padding: 5px;
    height: 30px;
    width: 100%;
  `

  export const Select = styled.div<IStyledProps>(({ top }) => ({
    minWidth: '220px',
    position: 'relative',
    touchCallout: 'none',
    userSelect: 'none',
    width: 'fit-content',
    a: {
      ...colorStyles,
      borderRadius: '5px',
      display: 'flex',
      padding: '10px 20px',
      textDecoration: 'none',
      width: 'fit-content',
      div: {
        i: {
          cursor: 'pointer',
          marginLeft: '20px'
        }
      }
    },
    ul: {
      background: white,
      border: `1px solid ${black}`,
      borderRadius: '3px',
      listStyleType: 'none',
      margin: 0,
      overflow: 'auto',
      overflowStyle: 'none',
      padding: 0,
      position: 'absolute',
      scrollbarWidth: 'none',
      top: top ? `-${top}` : '0px',
      width: '130%',
      zIndex: 1,
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      li: {
        borderBottom: `1px solid ${shuttleGray}`,
        fontSize: FontSize.regular,
        padding: '10px',
        paddingLeft: '20px',
        touchCallout: 'none',
        userSelect: 'none',
        '&:last-child': {
          borderBottom: 'none'
        },
        '&:hover': {
          background: whiteLilac,
          color: outerSpace
        }
      }
    }
  }))
}

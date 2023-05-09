import styled from 'styled-components'

import { namedColors } from '../../theme'
import { FontSize } from '../../types'

const { shuttleGray, catskillWhite, outerSpace, whiteLilac, white } = namedColors

export namespace CSS {
  export const Tags = styled.div({
    backgroundColor: white,
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 5px 20px 2px',
    touchCallout: 'none',
    userSelect: 'none',
    width: '100%',
    'div.label': {
      color: shuttleGray,
      fontSize: FontSize.regular,
      marginBottom: '5px',
      marginTop: '-15px',
      paddingLeft: '5px'
    },
    'div.tag': {
      background: catskillWhite,
      borderRadius: '5px',
      color: outerSpace,
      cursor: 'pointer',
      display: 'inline-block',
      height: '30px',
      lineHeight: '30px',
      marginBottom: '8px',
      marginLeft: '5px',
      paddingLeft: '15px',
      paddingRight: '10px',
      '&:hover': {
        background: whiteLilac
      },
      i: {
        fontSize: FontSize.regular,
        color: shuttleGray,
        marginLeft: '10px'
      }
    },
    input: {
      marginLeft: '10px',
      border: 'none',
      outline: 'none'
    }
  })
}

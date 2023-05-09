import styled from 'styled-components'

import { calc } from '../../theme'
import { CalcType } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'textField'

export namespace CSS {
  export const TextFieldBase = styled.div({
    width: '250px',
    [`&.${BASE_CLASS_NAME}-full-width`]: {
      width: '100%'
    },
    [`&.${BASE_CLASS_NAME}-helper-text`]: {
      '& > :last-child': {
        marginTop: calc(CalcType.spacing, 2)
      }
    }
  })

  export const TextFieldHelpersWrapper = styled.div({
    display: 'flex',
    justifyContent: 'space-between'
  })
}

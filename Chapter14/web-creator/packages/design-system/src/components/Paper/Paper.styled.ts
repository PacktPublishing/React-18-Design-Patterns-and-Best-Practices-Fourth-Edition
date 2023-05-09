import styled from 'styled-components'

import { calc, namedColors } from '../../theme'
import { CalcType } from '../../types'

const { white } = namedColors

// Base Class Name
export const BASE_CLASS_NAME = 'paper'

export namespace CSS {
  export const PaperBase = styled.div({
    width: 'max-content',
    padding: calc(CalcType.spacing, 6),
    borderRadius: calc(CalcType.spacing, 2),
    backgroundColor: white
  })
}

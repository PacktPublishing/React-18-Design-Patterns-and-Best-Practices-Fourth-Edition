import styled from 'styled-components'

import { calc, mapColorStyles, namedColors, themeCssVars } from '../../theme'
import { CalcType, Colors, FontSize } from '../../types'

const { transparent } = namedColors

// Base Class Name
export const BASE_CLASS_NAME = 'input'

// Color
const colorStyles: any = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  borderColor: 'main',
  '&:hover': {
    borderColor: 'main'
  }
})

export namespace CSS {
  export const InputWrapper = styled.div`
    padding: ${calc(CalcType.padding, [3.25, 4])};
    margin: ${calc(CalcType.spacing, [2, 0])};
    margin-bottom: 20px;
    background: var(--inputBackground);
    border: 1px solid var(--inputBorderColor);
    box-sizing: border-box;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: ${calc(CalcType.spacing, 2)};
    width: 250px;

    &.disabled {
      background: var(--inputDisabledBackground);
    }

    &::placeholder {
      color: var(--inputPlaceholderColor);
      opacity: 1;
    }

    &:hover {
      border-color: var(--inputHoverBorderColor);
    }

    &.${BASE_CLASS_NAME}-focus {
      border-color: var(--inputFocusBorderColor);
    }

    &.${BASE_CLASS_NAME}-full-width {
      width: 100%;
    }

    display: flex;
    align-items: center;
    ${colorStyles}
  `

  export const InputBase = styled.input`
    width: 100%;
    background: ${transparent};
    border: none;
    font-size: ${FontSize.regular};
    font-family: inherit;
    line-height: 20px;
    outline: none;
    resize: none;
    color: var(--inputColor);

    &:disabled {
      background: var(--inputDisabledBackground);
    }

    ${colorStyles}
  `

  export const InputIcon = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    background-color: var(--transparent);
    height: ${calc(CalcType.spacing, 5)};
    width: ${calc(CalcType.spacing, 5)};

    &.icon-left {
      margin-left: 0;
      margin-right: ${calc(CalcType.spacing, 2)};
    }

    &.icon-right {
      margin-left: ${calc(CalcType.spacing, 2)};
      margin-right: 0;
    }

    &.pointer {
      cursor: 'pointer';
    }

    & > svg {
      color: var(--inputIconColor);
      min-height: 18px;
      min-width: 18px;
    }
  `
}

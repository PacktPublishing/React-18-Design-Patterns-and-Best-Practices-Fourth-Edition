import { ValueOf } from '@web-creator/utils'

export const Size = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
} as const

export type Size = ValueOf<typeof Size>
export const Sizes = Object.keys(Size)

import { ValueOf } from '@web-creator/utils'

export const ButtonSize = {
  xl: 'xl',
  lg: 'lg',
  md: 'md',
  sm: 'sm'
} as const

export type ButtonSize = ValueOf<typeof ButtonSize>
export const ButtonSizes = Object.keys(ButtonSize)

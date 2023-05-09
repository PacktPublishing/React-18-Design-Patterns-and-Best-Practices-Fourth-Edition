import { ValueOf } from '@web-creator/utils'

export const Variant = {
  contained: 'contained',
  outlined: 'outlined'
} as const

export type Variant = ValueOf<typeof Variant>

export const ButtonVariant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
} as const

export type ButtonVariant = ValueOf<typeof ButtonVariant>
export const ButtonVariants = Object.keys(ButtonVariant)

export const AvatarVariant = {
  rounded: 'rounded',
  circle: 'circle'
} as const

export type AvatarVariant = ValueOf<typeof AvatarVariant>
export const AvatarVariants = Object.keys(AvatarVariant)

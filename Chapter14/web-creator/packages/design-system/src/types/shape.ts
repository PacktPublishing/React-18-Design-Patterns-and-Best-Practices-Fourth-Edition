import { ValueOf } from '@web-creator/utils'

export const Shape = {
  regular: 'regular',
  square: 'square',
  round: 'round'
} as const

export type Shape = ValueOf<typeof Shape>
export const Shapes = Object.keys(Shape)

export interface IShapeTheme {
  unitBase: string
}

export const ShapesTheme = {
  unitBase: 'unitBase'
} as const
export type ShapesTheme = ValueOf<typeof Shapes>

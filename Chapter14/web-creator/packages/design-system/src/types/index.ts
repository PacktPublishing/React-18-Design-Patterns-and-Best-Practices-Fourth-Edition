import { IPalette } from '../theme/palettes/lightPalette'
import { ITypography } from './typography'

export * from './alignment'
export * from './calc'
export * from './fontSize'
export * from './fontWeight'
export * from '../theme/palettes/lightPalette'
export * from './shape'
export * from './size'
export * from './theme'
export * from './typography'
export * from './variant'

export interface CustomTheme {
  palette?: IPalette
}

export default interface Theme {
  palette: IPalette
  typography?: ITypography
}

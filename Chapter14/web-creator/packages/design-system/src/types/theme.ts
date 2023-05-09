import { IPalette } from '../theme/palettes/lightPalette'
import { ITypography } from './typography'

export interface Theme {
  palette: IPalette
  typography?: ITypography
}

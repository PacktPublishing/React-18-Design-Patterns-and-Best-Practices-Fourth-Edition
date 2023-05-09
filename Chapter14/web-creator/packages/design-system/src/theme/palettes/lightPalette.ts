import { ValueOf } from '@web-creator/utils'

import { namedColors } from './namedColors'

const {
  white,
  black,
  pattensBlue,
  onahau,
  dodgerBlue,
  cerulean,
  lochmara,
  prussianBlue,
  catskillWhite,
  whiteLilac,
  stormGray,
  shuttleGray,
  outerSpace,
  shark,
  grannyApple,
  cruise,
  niagara,
  mountainMeadow,
  greenHaze,
  jewel,
  pastelPink,
  pink,
  radicalRed,
  ceriseRed,
  mexicanRed,
  bleachWhite,
  eggWhite,
  lightningYellow,
  yellowOrange,
  hacienda
} = namedColors

type Palette = {
  alert?: {
    main: string
    dark?: string
    contrastText: string
  }
  common: {
    main: string
    light?: string
    dark?: string
    contrastText: string
  }
}

export const PrimaryPalette: Palette = {
  alert: {
    main: pattensBlue,
    dark: dodgerBlue,
    contrastText: greenHaze
  },
  common: {
    main: lochmara,
    light: cerulean,
    dark: prussianBlue,
    contrastText: white
  }
}

export const SecondaryPalette: Palette = {
  alert: {
    main: catskillWhite,
    dark: grannyApple,
    contrastText: shark
  },
  common: {
    main: stormGray,
    light: shuttleGray,
    dark: shuttleGray,
    contrastText: white
  }
}

export const SuccessPalette: Palette = {
  alert: {
    main: grannyApple,
    dark: cruise,
    contrastText: jewel
  },
  common: {
    main: niagara,
    light: mountainMeadow,
    dark: greenHaze,
    contrastText: white
  }
}

export const InfoPalette: Palette = {
  alert: {
    main: pattensBlue,
    dark: onahau,
    contrastText: lochmara
  },
  common: {
    main: lochmara,
    light: cerulean,
    dark: cerulean,
    contrastText: white
  }
}

export const WarningPalette: Palette = {
  alert: {
    main: bleachWhite,
    dark: eggWhite,
    contrastText: hacienda
  },
  common: {
    main: lightningYellow,
    light: yellowOrange,
    dark: yellowOrange,
    contrastText: white
  }
}

export const DangerPalette: Palette = {
  alert: {
    main: pastelPink,
    dark: pink,
    contrastText: mexicanRed
  },
  common: {
    main: radicalRed,
    light: ceriseRed,
    dark: ceriseRed,
    contrastText: white
  }
}

export const LightPalette: Palette = {
  alert: {
    main: white,
    dark: grannyApple,
    contrastText: shark
  },
  common: {
    main: whiteLilac,
    light: whiteLilac,
    dark: catskillWhite,
    contrastText: black
  }
}

export const DarkPalette: Palette = {
  alert: {
    main: outerSpace,
    dark: shark,
    contrastText: catskillWhite
  },
  common: {
    main: shark,
    light: outerSpace,
    dark: black,
    contrastText: white
  }
}

export interface IPalette {
  primary: Palette
  secondary?: Palette
  success?: Palette
  info?: Palette
  warning?: Palette
  danger?: Palette
  light?: Palette
  dark?: Palette
}

export const Color = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  light: 'light',
  dark: 'dark'
} as const

export type Color = ValueOf<typeof Color>
export const Colors = Object.keys(Color)

const palette: IPalette = {
  primary: PrimaryPalette,
  secondary: SecondaryPalette,
  success: SuccessPalette,
  info: InfoPalette,
  warning: WarningPalette,
  danger: DangerPalette,
  light: LightPalette,
  dark: DarkPalette
}

export default palette

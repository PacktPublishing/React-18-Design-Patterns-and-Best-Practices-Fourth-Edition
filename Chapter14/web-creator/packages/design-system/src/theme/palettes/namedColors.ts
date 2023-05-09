export const namedColors = {
  // Base
  white: '#FFF',
  black: '#000',
  transparent: 'transparent',
  // Blue
  pattensBlue: '#DBEDFF',
  onahau: '#C9E3FF',
  dodgerBlue: '#4AA3FF',
  cerulean: '#009ED6',
  lochmara: '#007BC5',
  prussianBlue: '#004481',
  midnightBlue: '#003A66',
  resolutionBlue: '#002F52',
  // Gray
  gallery: '#EEE',
  catskillWhite: '#EFF2F7',
  wildSand: '#F5F5F5',
  zircon: '#f3f5f9',
  whiteLilac: '#F1F4F8',
  alto: '#DDD',
  graySuit: '#D0C9D6',
  dustyGray: '#999',
  stormGray: '#74788D',
  shuttleGray: '#636678',
  emperor: '#555',
  outerSpace: '#343A40',
  shark: '#2C3136',
  mineShaft: '#222',
  mirage: '#181C27',
  vulcan: '#131620',
  codGray: '#111',
  // Green
  chiffon: '#EEFFC9',
  iceberg: '#CEEFEA',
  grannyApple: '#CEF2E3',
  cruise: '#B6ECD5',
  niagara: '#0AC074',
  mountainMeadow: '#0BB197',
  greenHaze: '#09A363',
  gossamer: '#099680',
  salem: '#089A5D',
  watercourse: '#076A5B',
  jewel: '#067346',
  christi: '#4FCA0C',
  crusoe: '#155200',
  // Red
  pastelPink: '#FFD8DF',
  pink: '#FFC5CF',
  monaLisa: '#FF8E8E',
  radicalRed: '#FF3D60',
  ceriseRed: '#D93452',
  mexicanRed: '#99253a',
  // Yellow
  bleachWhite: '#FFF9E6',
  colonialWhite: '#FFEBBD',
  eggWhite: '#FEEAC0',
  atomicTangerine: '#FF9E66',
  lightningYellow: '#FCB92C',
  yellowOrange: '#FB9F44',
  hacienda: '#976f1a',
  westSide: '#FF960F'
}

export const getExtendedNamedColors = (colors: any = {}) => {
  const extendedColors: any = { ...namedColors }

  const newColors = Object.keys(colors)

  if (newColors.length > 0) {
    newColors.forEach((color) => {
      extendedColors[color] = colors[color]
    })
  }

  return extendedColors
}

export const buildCSSVariables = (theme: string, combinations: any, moreColors: any) => {
  const isLight = theme === 'light'
  const combinedColors: any = {}

  Object.keys(combinations).forEach((color: string) => {
    const lightColor = combinations[color][0]
    const darkColor = combinations[color][1] || lightColor

    combinedColors[color] = isLight ? lightColor : darkColor
  })

  return {
    ...moreColors,
    ...combinedColors
  }
}

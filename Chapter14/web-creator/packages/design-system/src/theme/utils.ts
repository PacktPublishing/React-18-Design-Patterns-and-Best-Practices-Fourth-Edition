import { CalcType, Color, Theme } from '../types'
import cssVariables from './cssVariables'

type CommonProps = {
  values: Theme
  prefix?: string
}

export const getClass = (BASE_CLASS_NAME: string, className: string) =>
  `${BASE_CLASS_NAME}-${className}`

export const v = (variable: string) => `var(--${variable})`

const createCSSVars = (node: any, cssVars: any, nestedKey?: string, isAssignation = false) => {
  for (const key in node) {
    if (node.hasOwnProperty(key)) {
      const newKey = !nestedKey ? `--${key}` : `${nestedKey}-${key}`

      const value = node[key]

      if (typeof value === 'object') {
        createCSSVars(value, cssVars, newKey, isAssignation)
      } else {
        cssVars[newKey] = isAssignation ? `${value};` : `var(--${value});`
      }
    }
  }
}

export const getCSSVars = (vars: any, isAssignation = false) => {
  const cssVars: Record<string, any> = {}
  createCSSVars(vars, cssVars, '', isAssignation)

  const cleanCss = Object.keys(cssVars)
    .map((key: string) => `${key}:${cssVars[key]}`)
    .join('')

  return cleanCss
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, true)}}`

export const getStyleVars = (styleName: string, style: any): string =>
  `body.theme--${styleName} {
    ${getCSSVars(style, true)}
    ${cssVariables}
  }`

export const generateVarNames = ({ values, prefix = '-' }: CommonProps): Theme => {
  const vars: any[] = []
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object') {
      vars.push([key, generateVarNames({ values: value, prefix: `${prefix}-${key}` })])
    } else {
      vars.push([key, `var(${prefix}-${key})`])
    }
  }

  const themeObject = Object.fromEntries(vars)
  const themeVars: Theme = { ...values, ...themeObject }

  return themeVars
}

export const generateThemeVars = (themes: Record<string, any>) => {
  const themeNames = Object.keys(themes)
  let allCss = ''

  themeNames.forEach((name) => {
    const themeCssVars = getStyleVars(name, themes[name])
    allCss += themeCssVars
  })

  return allCss
}

const calculate = (number: number | string) => `calc(4px * ${Number(number)})`

export const calc = (type: CalcType, data: number | number[]) => {
  let calcData = ''

  switch (type) {
    case CalcType.spacing:
      if (typeof data === 'number') {
        calcData = calculate(data)
      }
      break

    case CalcType.padding:
      if (Array.isArray(data)) {
        const padding: Array<string> = []

        const top = data[0]
        const right = data[1]
        const bottom = data[2]
        const left = data[3]

        if (top === 0 || top) padding.push(calculate(top))
        if (right === 0 || right) padding.push(calculate(right))
        if (bottom === 0 || bottom) padding.push(calculate(bottom))
        if (left === 0 || left) padding.push(calculate(left))

        calcData = padding.join(' ')
      }

      break
    default:
      break
  }

  return calcData
}

export const getColorStyles = (colorType: any, baseClassName: string, themeCssVars: any) => {
  const paletteType: any = themeCssVars.palette[colorType]
  const palette: any = paletteType[baseClassName] ?? paletteType.common

  return (cssProps: any) => {
    const css = { ...cssProps }

    // Common styles
    if (css.backgroundColor) {
      css.backgroundColor = palette[cssProps.backgroundColor] ?? cssProps.backgroundColor
    }

    if (css.borderColor) {
      css.borderColor = palette[cssProps.borderColor] ?? cssProps.borderColor
    }

    if (css.color) {
      css.color = palette[cssProps.color] ?? cssProps.color
    }

    if (css['&:hover']) {
      css['&:hover'] = {
        ...css['&:hover'],
        backgroundColor:
          palette[cssProps['&:hover'].backgroundColor] ?? cssProps['&:hover'].backgroundColor,
        color: palette[cssProps['&:hover'].color] ?? cssProps['&:hover'].color
      }

      if (css['&:hover'].borderColor) {
        css['&:hover'].borderColor =
          palette[cssProps['&:hover'].borderColor] ?? cssProps['&:hover'].borderColor
      }
    }

    if (css['&:hover a']) {
      css['&:hover a'] = {
        ...css['&:hover a'],
        color: palette[cssProps['&:hover a'].color] ?? cssProps['&:hover a'].color
      }
    }

    if (css.a) {
      css.a = {
        ...css.a,
        color: palette[cssProps.a.color] ?? cssProps.a.color
      }
    }

    // Pagination styles
    if (css['& > li > a > span.active']) {
      css['& > li > a > span.active'] = {
        ...css['& > li > a > span.active'],
        color:
          palette[cssProps['& > li > a > span.active'].color] ??
          cssProps['& > li > a > span.active'].color,
        backgroundColor:
          palette[cssProps['& > li > a > span.active'].backgroundColor] ??
          cssProps['& > li > a > span.active'].backgroundColor
      }
    }

    if (css['& > li > a > span:hover']) {
      css['& > li > a > span:hover'] = {
        ...css['& > li > a > span:hover'],
        color:
          palette[cssProps['& > li > a > span:hover'].color] ??
          cssProps['& > li > a > span &:hover'].color,
        backgroundColor:
          palette[cssProps['& > li > a > span:hover'].backgroundColor] ??
          cssProps['& > li > a > span:hover'].backgroundColor
      }
    }

    return css
  }
}

export const mapColorStyles = (
  colors: any,
  baseClassName: string,
  themeCssVars: any,
  cssProps: any
) => {
  const cssArray = colors.map((color: Color) => ({
    [`&.${baseClassName}-${Color[color]}`]: {
      ...getColorStyles(Color[color], baseClassName, themeCssVars)(cssProps)
    }
  }))

  const cssObject = Object.assign({}, ...cssArray)

  return cssObject
}

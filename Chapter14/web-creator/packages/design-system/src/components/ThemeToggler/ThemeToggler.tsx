import { cookies } from '@web-creator/utils'
import React, { useEffect, useState } from 'react'

import SVG from '../Svg'

const ThemeToggler = () => {
  const [theme, setTheme] = useState('theme--light')

  const setThemeClass = (selectedTheme: string) => {
    document.body.classList.remove('theme--light', 'theme--dark')
    document.body.classList.add(selectedTheme)
  }

  useEffect(() => {
    const choosenTheme = cookies.get('theme')
    const themeSelection = choosenTheme || 'theme--light'

    setTheme(themeSelection)
    setThemeClass(themeSelection)
  }, [])

  const handleToggle = (selectedTheme: 'light' | 'dark') => {
    const currentTheme = `theme--${selectedTheme}`

    cookies.set('theme', currentTheme, 30)
    setTheme(currentTheme)
    setThemeClass(currentTheme)
  }

  return theme === 'theme--dark' ? (
    <SVG.Sun onClick={() => handleToggle('light')} />
  ) : (
    <SVG.Moon onClick={() => handleToggle('dark')} />
  )
}

export default ThemeToggler

// @ts-ignore
import defaults from '@rebass/preset'
import color from 'color'

console.log('defaults', defaults)

export type ThemeKey = 'light' | 'dark'

const fonts = {
  ...defaults.fonts,
  body: 'PT Sans',
  heading: 'PT Serif',
}

const colorPrimary = '#339AF0'

const colorBackgroundDark = '#1b2735'

// Theme interface has to be defined in ".d.ts" file in order for styled-components to pick it up
export const themes: { [key in ThemeKey]: Theme } = {
  // ====================================================
  // Light
  // ====================================================
  light: {
    ...defaults,
    fonts,
    colors: {
      ...defaults.colors,
      background: 'white',
      backgroundDark: '#efefef',
      backgroundLight: 'white',
      primary: colorPrimary,
      secondary: '#74d3f9',
      text: '#333',
      border: 'gray',
    },
  },

  // ====================================================
  // Dark
  // ====================================================
  dark: {
    ...defaults,
    fonts,
    colors: {
      ...defaults.colors,
      background: colorBackgroundDark,
      backgroundDark: color(colorBackgroundDark).darken(0.25).string(),
      backgroundLight: color(colorBackgroundDark).lighten(0.2).string(),
      primary: colorPrimary,
      secondary: 'hsl(0 0% 95% / 1)',
      text: '#fff',
      border: 'gray',
    },
  },
}

// @ts-ignore
import defaults from '@rebass/preset'
import color from 'color'

console.log('defaults', defaults)

export type ThemeKey = 'light' | 'dark'

const shared = {
  ...defaults,
  fonts: {
    ...defaults.fonts,
    body: 'PT Sans',
    heading: 'PT Serif',
  },
  radii: {
    ...defaults.radii,
    default: 7,
  },
}

const colorPrimary = '#339AF0'

const colorBackgroundDark = '#101720'

// Theme interface has to be defined in ".d.ts" file in order for styled-components to pick it up
export const themes: { [key in ThemeKey]: Theme } = {
  // ====================================================
  // Light
  // ====================================================
  light: {
    ...shared,
    colors: {
      ...defaults.colors,
      background: 'white',
      backgroundDark: '#efefef',
      backgroundLight: 'white',
      primary: colorPrimary,
      secondary: '#74d3f9',
      text: '#333',
      border: '#d7d9da',
    },
  },

  // ====================================================
  // Dark
  // ====================================================
  dark: {
    ...shared,
    colors: {
      ...defaults.colors,
      background: '#18191a',
      backgroundDark: color(colorBackgroundDark).darken(0.1).string(),
      backgroundLight: color(colorBackgroundDark).lighten(0.2).string(),
      primary: colorPrimary,
      secondary: 'hsl(0 0% 95% / 1)',
      text: '#e4e6eb',
      border: '#3d4042',
    },
  },
}

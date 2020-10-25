// @ts-ignore
import defaults from '@rebass/preset'
import color from 'color'

console.log('defaults', defaults)

const shared = {
  ...defaults,
  fonts: {
    ...defaults.fonts,
    body: 'PT Serif',
    heading: 'PT Serif',
  },
}

const colorPrimary = '#339AF0'

const colorBackgroundDark = '#101720'

// Theme interface has to be defined in a ".d.ts" file in order for styled-components to pick it up
export const themes: { [key in ThemeKey]: Theme } = {
  // ====================================================
  // Light
  // ====================================================
  light: {
    key: 'light',
    ...shared,
    colors: {
      ...defaults.colors,
      background: 'white',
      backgroundDark: colorBackgroundDark,
      backgroundLight: 'white',
      primary: colorPrimary,
      secondary: '#74d3f9',
      text: '#333',
      border: '#d7d9da',
      selection: colorPrimary,
      scrollbar: colorPrimary,
      scrollbarHover: 'yellow',
    },
  },

  // ====================================================
  // Dark
  // ====================================================
  dark: {
    key: 'dark',
    ...shared,
    colors: {
      ...defaults.colors,
      background: '#18191a',
      backgroundDark: color(colorBackgroundDark).darken(0.1).string(),
      backgroundLight: '#2a2b2d',
      primary: colorPrimary,
      secondary: 'hsl(0 0% 95% / 1)',
      text: '#e4e6eb',
      border: '#3d4042',
      selection: colorPrimary,
      scrollbar: colorPrimary,
      scrollbarHover: 'yellow',
    },
  },
}

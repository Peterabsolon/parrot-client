type ThemeKey = 'light' | 'dark'

interface Theme extends Omit<RebassTheme, 'colors'> {
  [key: string]: IAnyObject | ThemeKey

  key: ThemeKey

  colors: RebassTheme['colors'] & {
    backgroundDark: string
    backgroundLight: string
    border: string
    selection: string
    scrollbar: string
    scrollbarHover: string
  }
}

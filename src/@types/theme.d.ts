interface Theme extends Omit<RebassTheme, 'colors'> {
  [key: string]: IAnyObject

  colors: RebassTheme['colors'] & {
    backgroundDark: string
    backgroundLight: string
    border: string
  }
}

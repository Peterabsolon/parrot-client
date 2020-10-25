import { Box, BoxProps } from 'rebass'

const ratio = 3 / 5

interface ParrotIconProps extends BoxProps {
  primary?: boolean
  size?: number
}

export const ParrotIcon = ({ primary, size = 40, ...rest }: ParrotIconProps): JSX.Element => (
  <Box {...rest} style={{ height: size, width: size * ratio }}>
    <svg
      viewBox="0 0 24 40"
      xmlns="http://www.w3.org/2000/svg"
      fill={primary ? '#339AF0' : 'currentcolor'}
    >
      <path d="M3.187 26.614c-.106.85-.318 1.54-.637 2.071-.319.532-1.169 1.328-2.55 2.39h3.187V40c2.869-1.062 4.675-1.912 5.419-2.55.743-.637 1.168-1.487 1.274-2.55v-3.824c2.656-1.913 4.463-3.613 5.419-5.1.956-1.487 1.38-2.868 1.275-4.143l.016-.319v-7.33H3.187v12.11" />
      <path d="M14.183 30.279c-.149-.224-.415-.49-.796-.797l-.16-.16c.608-.518 1.034-.916 1.275-1.195.242-.278.56-.73.956-1.354.412 1.16.571 2.01.478 2.55-.093.539-.518 1.23-1.275 2.071-.17-.52-.329-.891-.478-1.115zM18.964 11.952c.91-.52 1.6-1.316 2.072-2.39l-3.347-1.275c-.337 1.002-.709 1.8-1.115 2.39-.407.591-1.15 1.441-2.231 2.55 2.171-.33 3.712-.755 4.621-1.275zM24.223 7.809c-.316-2.391-.848-4.023-1.593-4.896-.746-.873-2.393-1.791-4.94-2.754v7.65h6.533z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.478 13.068c.934-.698 1.637-1.356 2.11-1.976.472-.62.773-1.278.903-1.975H2.286c1.112-1.716 1.865-2.932 2.26-3.647.263-.476.455-.89.637-1.282.314-.676.6-1.292 1.171-2.06C7.43.681 9.092.182 11.025 0h6.027v8.814a8.31 8.31 0 0 1-1.206 1.822c-.5.582-1.403 1.392-2.712 2.432H.478zM12 6c0 1.105-.672 2-1.5 2S9 7.105 9 6s.672-2 1.5-2 1.5.895 1.5 2z"
      />
    </svg>
  </Box>
)

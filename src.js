import { useTheme, useMediaQuery } from '@material-ui/core'

export default function useMobileOnly () {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('xs'))
}

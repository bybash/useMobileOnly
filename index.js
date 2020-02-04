const { useTheme, useMediaQuery } = require('@material-ui/core')

function useMobileOnly () {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('xs'))
}
module.exports = useMobileOnly

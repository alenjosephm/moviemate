import { Typography, useTheme } from '@mui/material'
import { purple } from '@mui/material/colors'

const Logo = () => {
  const theme = useTheme()

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Movie<span style={{ color: purple }}>Mate</span>
    </Typography>
  )
}

export default Logo

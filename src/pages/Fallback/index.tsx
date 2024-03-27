import { Stack, Typography } from '@mui/material'

const Fallback = () => {
  return (
    <Stack>
      <Typography variant="h3">
        Ooops, seems like you are trying to use widget with no parent page
      </Typography>
    </Stack>
  )
}

export default Fallback

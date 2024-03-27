import { Stack, Typography } from '@mui/material'

const Fallback = () => {
  return (
    <Stack>
      <Typography variant="h3" align="center">
        Ooops, seems like you are trying to use widget with no parent page
      </Typography>
      <Typography variant="h4" align="center" sx={{ p: 5 }}>
        Please check{' '}
        <a href="https://github.com/Doc5696/dom_inspector/blob/master/README.md">
          this page
        </a>
      </Typography>
    </Stack>
  )
}

export default Fallback

import {Box,Typography,CircularProgress} from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:'8vw'}}>
            <CircularProgress color="success" />
            <Typography gutterBottom >
                Loading files...
            </Typography>
        </Box>
  )
}

export default Loading
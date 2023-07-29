import { Box,Typography, Container,Divider } from '@mui/material'
// import style from './Intro.module.css'
import styled from 'styled-components';


const Intro = () => {

    const CustomDivider= styled(Divider)({
        background: 'grey',
    })
  return (
    <Box sx={{  display:'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '5vw',
                '@media (max-width: 600px)':{
                    flexDirection:'column',
                    margin: '5vh 5vw',
                }
    }}>
        <Container sx={{ lineHeight: '87px', fontWeight: '600','@media (max-width:600px)':{
            display:'flex',
            justifyContent:'center',
            margin: '40px 0',
        }}}>
            <Typography variant='h2' sx={{'@media (max-width: 600px)':{
            fontSize: '8vw', 
        }}} >Let&apos;s Introduce Ourself</Typography>
        </Container>

        <CustomDivider orientation='vertical' sx={{
            '@media (max-width: 600px)': {
                
                width: '100%',
                height: '1px'
              },
        }} flexItem/>

        <Container sx={{lineHeight: '52px','@media (max-width: 600px)':{
            margin:'40px 0', 
        } }}>
            <Typography variant='h4' sx={{'@media (max-width: 600px)':{
            fontSize: '6vw', 
        }}}>
                Criminal Lawyer
            </Typography>
            <Typography sx={{opacity: '0.3','@media (max-width: 600px)':{
            fontSize: '3vw', 
        }}}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exercitation.
            </Typography>
        </Container>
    </Box>
  )
}

export default Intro
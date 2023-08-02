import { Box, Container,Typography } from "@mui/material"
import Logo from '../header/Logo'
import Navigation from '../header/Navigation'
import Socials from "./Socials"
const Footer = () => {
  return (
    <Box sx={{backgroundColor:'var(--black)', padding:'20px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Container sx={{display:'flex', justifyContent:'space-between',padding:'30px 0','@media (max-width:900px)':{
            flexDirection:'column',
            alignItems:'center',
            gap:'50px'
        }}}>
            <Logo />
            <Navigation footer/>
            <Socials />
        </Container>
        <Container sx={{
            justifyContent:'center',alignItems:'center',margin:'50px 0',
            display:'flex',
            color: '#FFF',
            fontFamily: 'Helvetica Now Display',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight:' 400',
            gap:'50px',
            opacity:'0.3'
        }}>
            <Typography>© 2020 Acme. All right reserved.</Typography>
            <Typography><a href="/">Privacy Policy</a></Typography>
            <Typography><a href="/">Terms of Service</a></Typography>
        </Container>
    </Box>
  )
}

export default Footer
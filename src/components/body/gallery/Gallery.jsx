import { Box, Container, Typography,Grid} from "@mui/material"
import gridone from '../../../assets/Grid_images/gridone.png'
import gridtwo from '../../../assets/Grid_images/gridtwo.png'
import gridthree from '../../../assets/Grid_images/gridthree.png'
import gridfour from '../../../assets/Grid_images/gridfour.png'
import gridfive from '../../../assets/Grid_images/gridfive.png'
import gridsix from '../../../assets/Grid_images/gridsix.png'
import style from "../gallery/Gallery.module.css";

const Gallery = () => {
  return (
    <Box>
        <Container>
            <Typography variant="h2" sx={{textAlign:"center", fontWeight:'600', fontSize:'3.3rem', '@media (max-width:800px)':{fontSize:'8vw'}}}>Area of Practices</Typography>
        </Container>
        <Container sx={{marginTop: '40px'}}>
        <Grid container spacing={2} >
            <Grid item xs={12} sm={8}>
                <img className={style.responsiveImg} src={gridone} alt="one" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img className={style.responsiveImg} src={gridtwo} alt="two" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img className={style.responsiveImg} src={gridthree} alt="three" />
            </Grid>
            <Grid item xs={12} sm={8}>
                <img className={style.responsiveImg} src={gridfour} alt="four" />
            </Grid>
            <Grid item xs={12} sm={8}>
                <img className={style.responsiveImg} src={gridfive} alt="five" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img className={style.responsiveImg} src={gridsix} alt="siz" />
            </Grid>
        </Grid>
        </Container>
    </Box>

  )
}

export default Gallery
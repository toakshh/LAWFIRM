import { Box, Container, Typography, CardMedia, Grid} from "@mui/material"
import img1 from "../../../assets/team/Ellipse1.png"
import img2 from "../../../assets/team/Ellipse2.png"
import img3 from "../../../assets/team/Ellipse3.png"
import img4 from "../../../assets/team/Ellipse4.png"
import img5 from "../../../assets/team/Ellipse5.png"
import img6 from "../../../assets/team/Ellipse6.png"
const Team = () => {
    const teamData=[{
        id: "rsnet-rstoi",
        img: img1,
        name: "Daniel Vettori",
        cases: "301 Cases",
    },
    {
        id: "rsnet-radhpi",
        img: img2 ,
        name: "Joe Root",
        cases: "351 Cases",
    },
    {
        id: "rhiesnrat-rstoi",
        img: img3,
        name: "Tim Paine",
        cases: "472 Cases",
    },
    {
        id: "oineoet-rstoi",
        img: img4,
        name: "Josh Hazelwood",
        cases: "212 Cases",
    },
    {
        id: "rsnet-rsinehy",
        img: img5,
        name: "Steve Smith",
        cases: "567 Cases",
    },
    {
        id: "rshies-istoi",
        img: img6,
        name: "Jimmy Anderson",
        cases: "900 Cases",
    }]
  return (
    <Box sx={{margin:'0 8vw'}}>
        <Typography variant="h2" sx={{textAlign:'center',fontWeight:'600'}}>Our Team</Typography>


        <Grid container spacing={2} sx={{ padding:'15px', width:'100%', margin: '8vh 0'}}>
            {teamData.map(team =>{
                return (
                <Grid item
                xs={12}
                sm={6}
                md={4} 
                key={team.id}
                sx={{
                    display: "flex",
                    margin:'10px 0',
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius:'14px',
                    transition: 'all .2s ease-in-out ',
                    '&:hover': {
                        backgroundColor: 'var(--theme)',
                        color: "black "
                }
                }}>
                    <CardMedia
                        component="img"
                        sx={{ height: '65px', width: '65px',paddingLeft:'10px' }}
                        image={team.img}
                        alt="card logo"
                        loading="lazy"
                     />
                     <Container >
                        <Typography sx={{fontWeight:'600', fontSize:'24px'}}>{team.name}</Typography>
                        <Typography variant="body2" sx={{fontSize:'14px', fontWeight:'400', opacity:'0.3'}}>{team.cases}</Typography>
                     </Container>
                </Grid>)
            })}
        </Grid>
    </Box>
  )
}

export default Team
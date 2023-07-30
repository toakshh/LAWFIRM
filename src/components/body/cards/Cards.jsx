import { Box, Container, Typography, Card, CardActionArea, CardContent, Button, CardMedia } from "@mui/material";

import cardGift from "../../../assets/svg/cardGift.svg";
import styled from "styled-components";



const Cards = () => {
    const cardData = [
        {
            id: "isroet-stoei",
            success: "98",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        },
        {
            id: "tsoiea-oitna",
            success: "100",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        },
        {
            id: "sietn-stinie",
            success: "100",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        }
    ]
    const CustomButton = styled(Button)({
        marginTop:'15px !important',
        color:"black !important",
        fontweight: '600 !important',
        boxShadow: 'none !important' ,
        textTransform: 'none !important' ,
        fontSize: '14 !important'  ,
        padding: '6px 12px !important' ,
        border: 'none !important' ,
        lineHeight: '1.5 !important' ,
        borderRadius:'20px !important' ,
        backgroundColor: 'var(--theme) !important' ,
        '&:hover': {
          backgroundColor: 'black !important' ,
          border: '1px solid white !important' ,
          color:"white !important" 
        },
        '&:active': {
          backgroundColor: 'black !important' ,
          borderColor: 'blue !important' ,
        },
      });
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            margin: '7vw 5vw',
        }}>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2" sx={{ lineHeight: '77px', fontweight: '600',marginBottom:'30px',
            '@media (max-width:600px)':{
                fontSize: '8vw'
            }
            }}>Why Choose us?</Typography>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                {
                    cardData.map(item => {
                        return (
                            <Card key={item.id} sx={{display:'flex', flexDirection:'column',justifyContent:'flex-start', backgroundColor: 'transparent', borderRadius: '14px', border: '1.4px solid #4c4c4c', padding: '15px', width: '300px', color: "white",margin:'14px',flexShrink:'0',}}>

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: '60px', width: '60px' }}
                                        image={cardGift}
                                        alt="card logo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.success}% Success Rate
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: '0.3' }}>
                                            {item.para}
                                        </Typography>
                                        <CustomButton variant="contained">Read More</CustomButton>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })
                }

            </Container>

        </Box>
    )
}

export default Cards
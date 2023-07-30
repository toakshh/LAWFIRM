import { Box, Container, Typography, } from "@mui/material";
import CardItem from "./CardItem";
import cardGift from "../../../assets/svg/cardGift.svg";
const Cards = () => {
    const cardData = [
        {
            img: cardGift,
            id: "isroet-stoei",
            success: "98% success rate",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        },
        {
            img: cardGift,
            id: "tsoiea-oitna",
            success: "100% success rate",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        },
        {
            img: cardGift,
            id: "sietn-stinie",
            success: "100% success rate",
            para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia onsequatduis enim velit mollit Exer."
        }
    ]
    
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
                            <div key={item.id}>
                                <CardItem intro item={item}/>
                            </div>
                        )
                    })
                }

            </Container>

        </Box>
    )
}

export default Cards
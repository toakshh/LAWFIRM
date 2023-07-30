import { Box, Button, Container, Typography } from "@mui/material"
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import img1 from '../../../assets/profiles/Ellipse1.png'
import img2 from '../../../assets/profiles/Ellipse2.png'
import img3 from '../../../assets/profiles/Ellipse3.png'
import CardItem from "../cards/CardItem";

const Clients = () => {
    const feedback= [{
        id:'iorsnt-soiten',
        img: img1,
        name: "Jane Cooper",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae fugiat a aliquid, vero ullam? Ad fugit itaque quisquam reprehenderit magnam rerum nulla incidunt nihil pariatur, architecto quae! Ipsa, non.",
        position: "CEO of Hunt"
    },
    {
        id:'srtasrt-soiten',
        img: img2,
        name: "Schizo Michael",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae fugiat a aliquid, vero ullam? Ad fugit itaque quisquam reprehenderit magnam rerum nulla incidunt nihil pariatur, architecto quae! Ipsa, non." ,
        position: "CEO of Hunt"
    },
    {
        id:'iorsratsnt-soiten',
        img: img3,
        name: "Morne Morkel",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae fugiat a aliquid, vero ullam? Ad fugit itaque quisquam reprehenderit magnam rerum nulla incidunt nihil pariatur, architecto quae! Ipsa, non.",
        position: "CEO of Hunt"
    }]
    return (
        <Box sx={{ margin: '15dvh 5vw' }}>
            <Container sx={{
                display: 'flex', justifyContent: 'space-between', '@media (max-width:714px)': {
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }}>
                <Typography variant="h3" sx={{
                    lineHeight: '75px', fontWeight: '600', width: '40%', '@media (max-width:714px)': { width: '80%', textAlign: 'center', fontSize: '8dvw', lineHeight: '10vw' }
                }}>What says our happy Clients</Typography>
                <Typography sx={{ width: '50%', display: 'flex', justifyContent: 'end', alignItems: 'center', '@media (max-width:714px)': {display:'none' }}}>
                    <Button sx={{ backgroundColor: 'var(--light)', height: '80px', width: '80px', borderRadius: '50%', marginRight: '20px' }}>
                        <WestOutlinedIcon sx={{ color: 'black' }} />
                    </Button>
                    <Button sx={{ backgroundColor: 'var(--theme)', height: '80px', width: '80px', borderRadius: '50%' }}>
                        <EastOutlinedIcon sx={{ color: 'black' }} />
                    </Button>
                </Typography>
            </Container>
            <Container sx={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                {
                    feedback.map(item=>{
                        return (<div key={item.id}>
                            <CardItem item={item} intro={false} />
                        </div>)
                    })
                }
            </Container>
        </Box>
    )
}

export default Clients
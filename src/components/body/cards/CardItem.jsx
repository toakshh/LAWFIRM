import { Card, CardActionArea, CardContent, Typography, CardMedia, Button } from '@mui/material'
import styled from "styled-components";
import PropTypes from 'prop-types';
const CustomButton = styled(Button)({
    marginTop: '15px !important',
    color: "black !important",
    fontweight: '600 !important',
    fontSize: '14 !important',
    padding: '6px 12px !important',
    border: '1px solid var(--theme) !important',
    lineHeight: '1.5 !important',
    borderRadius: '20px !important',
    backgroundColor: 'var(--theme) !important',
    '&:hover': {
        backgroundColor: 'black !important',
        border: '1px solid white !important',
        color: "white !important"
    },
    '&:active': {
        backgroundColor: 'black !important',
        borderColor: 'blue !important',
    },
});
const CardItem = ({ item,intro }) => {


    return (
        <Card key={item.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'transparent', borderRadius: '14px', border: '1.4px solid #4c4c4c', padding: '15px', width: '300px', color: "white", margin: '14px', flexShrink: '0', }}>

            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ height: '65px', width: '65px',marginLeft:'10px' }}
                    image={item.img}
                    alt="card logo"
                    loading="lazy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name ? item.name : item.success}
                    </Typography>
                    {item.position && <Typography variant='body2'>{item.position}</Typography>}
                    <Typography variant="body2" sx={{ opacity: '0.3' }}>
                        {item.para}
                    </Typography>
                    {intro && <CustomButton variant="contained">Read More</CustomButton>}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
CardItem.propTypes = {
    item: PropTypes.object,
    intro: PropTypes.bool
}

export default CardItem
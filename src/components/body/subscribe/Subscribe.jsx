import { Box, Typography } from "@mui/material"
import {useRef} from 'react'
import style from './Subscribe.module.css'

const Subscribe = () => {
      const nameRef= useRef();
      const emailRef= useRef();
    return (
        <Box sx={{ backgroundColor: '#323232', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '8vw', padding: '8vw', flexDirection: 'column' }}>
            <Typography variant="h2" sx={{ fontWeight: '500', '@media (max-width:1000px)': { fontSize: '6vw' } }}>Subscribe Our Newsletter</Typography>
            <form className={style.form}>
                <input className={style.input} required type="text" placeholder="Name" ref={nameRef}/>
                <input className={style.input} required type="email" placeholder="Enter your Email"  ref={emailRef}/>
                <button className={style.input} type="submit" onClick={(e)=>e.preventDefault()}>Send</button>
            </form>
        </Box>
    )
}

export default Subscribe
import React from 'react'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import CarouselItems from './CarouselItem.mjs'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import Image from 'mui-image'


const Carousel2 = () => {
    const BreakPoints = { display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } };
    const BreakPoints2 = { width: { lg: '50%', md: '100%', sm: '100%', xs: '100%' } };
    const BreakPoints3 = { fontSize: { lg: '40px', md: '40px', sm: '40px', xs: '20px' }, height: { lg: '170px', md: '140px', sm: '120px', xs: '100px' } };
    const BreakPoints4 = { pt: { lg: '20px', md: '17px', sm: '15px', xs: '10px' }, fontSize: { lg: '20px', md: '18px', sm: '15px', xs: '14px' } };
    const ButtonBreakpoint = { height: { lg: '70px', md: '50px', sm: '40px', xs: '30px' } }

    return (
        <>
            <Box height='80vh'>
                <Carousel width='100vw' height='72.5vh'  >
                    {
                        CarouselItems.map((item) =>
                            <Stack key={item.id} direction='row' pt='30px' alignItems='start' justifyContent='flex-start' spacing={2}>
                                <Stack sx={BreakPoints2} >
                                    <Typography sx={BreakPoints3} fontWeight='600' color='#0D4C93' pt='40px' >{item.title}</Typography>
                                    <Typography sx={BreakPoints4} variant='h6' color='#000' mt='20px' >{item.description}</Typography>
                                    <Button sx={{ p: '14px 39px 14px 39px', width: '270px', m: '35px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff' }}>Посмотреть все</Button>
                                </Stack>
                                <Stack sx={BreakPoints}>
                                    <img alt='' className='ellipse' src='/images/Ellipse 4.png' />
                                    <img alt='' position='absolute' width={item.width} height={item.height} src={item.image} />
                                </Stack>
                            </Stack>
                        )
                    }
                </Carousel>
            </Box>
        </>
    )
}
export default Carousel2;
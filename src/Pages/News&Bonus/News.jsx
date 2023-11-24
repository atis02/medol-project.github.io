import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-material-ui-carousel'
import NewsData from './NewsData.mjs'
import Image from 'mui-image'
import Partners from '../Partners/Partners';
import { NavLink } from 'react-router-dom';



export default function News() {

    const BreakPoints2 = { fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' } };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1536, min: 1200 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1200, min: 900 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 900, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <Box>
            <Container>
                <Typography fontSize='1.5rem' textAlign='center' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>НОВОСТИ</Typography>

                <Carousel responsive={responsive} swipeable={true} infinite={false}  >
                    {
                        NewsData.map((news, index) =>
                            <Stack key={index} width='290px' p='15px' direction='column' alignItems='center' borderRadius='35px' border=' 2px solid #F6F6F6' opacity='0.9' background='linear-gradient(180deg, #F8F8F8 0%, rgba(255, 255, 255, 0.00) 100%)'>
                                <Image alt='' sx={{ borderRadius: '35px' }} width='235px' height='200px' src={news.image} />
                                <Typography color='#0D4C93' textAlign='center' fontSize='18px' m='22px 0 14px 0' fontWeight='600'>{news.title}</Typography>
                                <Typography>{news.date}</Typography>
                                <Typography textAlign='center' fontSize='15px'>{news.description}</Typography>
                                <NavLink className='history-link' to='/news'>

                                    <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '270px', height: '50px' }}>Подробнее</Button>
                                </NavLink>
                            </Stack>
                        )
                    }
                </Carousel>
                <Stack direction='row' justifyContent='space-evenly' width='100%' m='50px 0 50px 0' >
                    <Stack direction='row' alignItems='center' spacing={1}>

                        <Typography color='#0D4C93' sx={BreakPoints2}>
                            Посмотреть все новости
                        </Typography>
                        <Image alt='' width='22px' height='17px' src='/images/up-arrow (1) 1.svg' />

                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>

                        <Typography color='#0D4C93' sx={BreakPoints2}>
                            Подписаться на новости
                        </Typography>
                        <Image alt='' width='30px' height='25px' src='/images/up-arrow (1) 1.svg' />

                    </Stack>
                </Stack>
                <Partners />
            </Container>
        </Box>
    )
}

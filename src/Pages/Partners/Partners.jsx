import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import PartnerItems from './PartnerItems.mjs'
import Image from 'mui-image';
import FIrstPartnerItems from './PartnerItems.mjs';

export default function Partners() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };
    return (
        <Container>
            <Box mb='50px' mt='50px'>

                <Typography fontSize='1.5rem' textAlign='center' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>ПАРТНЕРЫ</Typography>
                <Carousel responsive={responsive} swipeable={true} infinite={true} arrows={false}>

                    {
                        FIrstPartnerItems.map((news, index) =>
                            <Stack width='90%' key={index} direction='column' alignItems='center' borderRadius='35px' border=' 2px solid #F6F6F6' opacity='0.9' background='linear-gradient(180deg, #F8F8F8 0%, rgba(255, 255, 255, 0.00) 100%)'>
                                <Image alt='' sx={{ borderRadius: '35px' }} width={news.width} height={news.height} src={news.image} />
                            </Stack>
                        )}
                </Carousel>
                <Carousel responsive={responsive} swipeable={true} infinite={true} arrows={false} >

                    {
                        FIrstPartnerItems.reverse().map((news, index) =>
                            <Stack width='90%' key={index} direction='column' alignItems='center' borderRadius='35px' border=' 2px solid #F6F6F6' opacity='0.9' background='linear-gradient(180deg, #F8F8F8 0%, rgba(255, 255, 255, 0.00) 100%)'>
                                <Image alt='' sx={{ borderRadius: '35px' }} width={news.width} height={news.height} src={news.image} />
                            </Stack>
                        )}
                </Carousel>
            </Box>
        </Container>
    )
}

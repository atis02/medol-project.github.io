import React from 'react'
import { Box, Stack, Container, Typography } from '@mui/material'
import ServiceDataImages from './ServiceDataImages'
import ServicesData from './ServicesData.mjs'
import Image from 'mui-image'
import { NavLink } from 'react-router-dom'

export default function AllServiceAssignments() {
    return (
        <Container sx={{ mt: '30px' }}>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>

                <Typography fontSize='1.5rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>Наши услуги</Typography>
                <Stack direction='row' spacing={1} m='50px 0 30px 0'>
                    <NavLink className='history-link' to='/'>Главная</NavLink> /
                    <NavLink className='history-link' to='/services'>Наши услуги</NavLink>
                </Stack>
            </Stack>
            <Stack direction='row' flexWrap='wrap' justifyContent='space-between'  >
                {ServicesData.map((product) =>
                    <Stack key={product.id} direction='column' justifyContent='center' p='10px' mt='10px' borderRadius='35px' backgroundColor='#F8F8F8' width='350px' height='400px' alignItems='center'>
                        <Image alt={product.title} width='200px' height='130px' src={product.image} />
                        <Typography pt='35px' textAlign='center' color='#363535' fontSize=' 24px'>{product.title}</Typography>
                    </Stack>
                )}
            </Stack>
        </Container>
    )
}

import React from 'react'
import { Box, Stack, Container, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import NewsData from './NewsData.mjs'
import Image from 'mui-image'
import NewsTab from './NewsTab'

export default function AllNews() {
    return (
        <Container>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography fontSize='1.5rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>Новости и Акции</Typography>
                <Stack direction='row' spacing={1} m='50px 0 30px 0'>
                    <NavLink className='history-link' to='/'>Главная</NavLink> /
                    <NavLink className='history-link' to='/news'>Новости и Акции</NavLink>
                </Stack>
            </Stack>
            <NewsTab />
        </Container>
    )
}

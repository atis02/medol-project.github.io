import { Box, Container } from '@mui/material'
import React from 'react'
import Products from '../Products/Products'
import Services from '../Services/Services'
import About from '../About/About'
import News from '../News&Bonus/News'
import HomeNav from '../../Components/HomeNav'

export default function Home() {
    return (
        <Box>
            <HomeNav />
            <Products />
            <Services />
            <About />
            <News />
        </Box>
    )
}

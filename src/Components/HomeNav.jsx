import React, { useState } from 'react'
import { Box, TextField, Typography, Stack, Container, Select, Menu, MenuItem, Button } from '@mui/material'
import Image from 'mui-image'
import Language from '../Language/Language';
import { useTranslation } from 'react-i18next'
import { Navlinsk } from '../Data/Navlinks.mjs';
import { NavLink } from 'react-router-dom';
import Header from './Header/Header';



export default function Navbar() {

    return (
        < Box className='navbar'>
            <Container >
                <Header />
            </Container >
        </Box >
    )
}

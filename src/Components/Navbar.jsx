import React, { useState } from 'react'
import { Box, TextField, Typography, Stack, Container, Select, Menu, MenuItem, Button } from '@mui/material'
import Image from 'mui-image'
import Language from '../Language/Language';
import { Navlinsk } from '../Data/Navlinks.mjs';
import { NavLink } from 'react-router-dom';
import Header from './Header/Header';
import { useTranslation } from 'react-i18next';


export default function Navbar() {

    // function Language() {

    //     const { t, i18n } = useTranslation();
    //     const [selectedOption, setSelectedOption] = useState(i18n.language);
    //     const [active, setActive] = useState('');
    //     const [anchorEl, setAnchorEl] = useState(null);


    //     const open = Boolean(anchorEl);

    //     const handleChange = (event) => {
    //         const selectedLanguage = event.target.value;
    //         setSelectedOption(selectedLanguage);
    //         i18n.changeLanguage(selectedLanguage)
    //     }

    //     const handleClose = () => {
    //         setAnchorEl(null)
    //     }

    //     // const changeLanguage = (newLanguage) => {
    //     //     t.changeLanguage(newLanguage);
    //     //     handleClose();
    //     // }

    //     return (
    //         <Box>
    //             {/* <Button variant='text' onClick={handleClick}>
    //                 {t.language === "ru" ? (
    //                     <>
    //                         <Image alt='russian-flag' src='/images/Flag_of_Russia 1.png' width='20px' height='20px' />
    //                         <Typography>Русский</Typography>
    //                     </>
    //                 ) :
    //                     (
    //                         <>
    //                             <Image alt='russian-flag' src='/images/EnglishFlag.png' width='20px' height='20px' />
    //                             <Typography>English</Typography>
    //                         </>
    //                     )
    //                 }
    //             </Button> */}
    //             <Select
    //                 id='basic-menu'
    //                 anchorEl={anchorEl}
    //                 onChange={handleChange}
    //                 open={open}
    //                 value={selectedOption}
    //                 onClose={handleClose}
    //                 MenuListProps={{
    //                     'aris-labelledby': 'basic-button',
    //                 }}

    //             >
    //                 <MenuItem
    //                     value='ru'
    //                 >
    //                     <>
    //                         <Image alt='russian-flag' src='/images/Flag_of_Russia 1.png' width='20px' height='20px' />
    //                         <Typography>Русский</Typography>
    //                     </>
    //                 </MenuItem>
    //                 <MenuItem
    //                     value='en'
    //                 >
    //                     <>
    //                         <Image alt='english-flag' src='/images/EnglishFlag.png' width='20px' height='20px' />
    //                         <Typography>English</Typography>
    //                     </>
    //                 </MenuItem>

    //             </Select>
    //         </Box>
    //     )
    // }
    const { t } = useTranslation()
    const [search, setSearch] = useState(false);

    // const Search = () =>{
    //     return(
    //     {search?
    //         (<TextField variant='outlined' ></TextField>)
    //     }
    //     )
    // }
    const Theme = (theme) => ({
        root: {
            [theme.breakpoints.between('sm', md)]: {

            },

        },
    })
    const BreakPoints3 = { display: { lg: 'none', md: 'flex', sm: 'flex', xs: 'none' }, alignItems: 'center' };
    const BreakPoints2 = { display: { lg: 'none', md: 'flex', sm: 'flex', xs: 'flex' }, alignItems: 'center' };
    const BreakPoints = { display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } };
    return (
        < Box pt='20px' className='navbar'>
            <Container >
                <Stack direction='row' justifyContent='space-between' >
                    <Stack direction='row' alignItems='center' spacing={2} sx={BreakPoints} >
                        <Image width='25px' height='25px' alt='/' src='/images/maps-and-flags 1.svg' />
                        <Stack direction='column' >
                            <Typography fontSize='14px' >
                                г.Ташкент, Чиланзар
                            </Typography>
                            <Typography fontSize='14px'>
                                10 квартал, дом 3/1
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={2} sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } }}>
                        <Image width='22px' height='22px' alt='/' src='/images/phone-call (1) 1.svg' />
                        <Stack direction='column'>
                            <Typography fontSize='14px'>
                                +998 71 276-62-53
                            </Typography>
                            <Typography fontSize='14px'>
                                +998 71 276-62-54
                            </Typography>
                        </Stack>
                    </Stack>
                    <Image alt='' width='200px' height='58px' src='/images/logo 1.png' />
                    <Stack sx={BreakPoints3} direction='row' alignItems='center' justifyContent='center' width='50px' height='50px' borderRadius='100px' backgroundColor='#fff'>

                        <Image width='25px' height='25px' alignItems='center' alt='/' src='/images/maps-and-flags 1.svg' />
                    </Stack>
                    <Stack sx={BreakPoints2} direction='row' alignItems='center' justifyContent='center' width='50px' height='50px' borderRadius='100px' backgroundColor='#fff'>

                        <Image width='25px' height='25px' alignItems='center' alt='/' src='/images/phone-call (1) 1.svg' />
                    </Stack>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>
                        <Image alt='' onClick={() => setSearch(!search)} width='26px' height='26px' src='/images/magnifier (1) 1.svg' />
                        {search ? <TextField variant='outlined' label="Search" ></TextField> : ''}
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1} sx={BreakPoints}>
                        <Image width='22px' height='22px' alt='/' src='/images/facebook-app-symbol 1.svg' />
                        <Typography fontSize='10px'>
                            Мы на Facebook
                        </Typography>
                    </Stack>
                    <Stack alignItems='center' direction='row' >
                        <Language />
                    </Stack>
                </Stack>
                <Stack mt='20px' className='links' direction='row' alignItems='center' justifyContent='center' >
                    {Navlinsk.map((nav) =>
                        <NavLink className='link' to={nav.link} key={nav.id}>
                            <Typography fontWeight='600' width='90%'>
                                {t(nav.title)}
                            </Typography>
                            <span style={{ pb: '10px' }}></span>
                        </NavLink>
                    )}
                </Stack>

            </Container >
        </Box >
    )
}

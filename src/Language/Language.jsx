import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import Image from 'mui-image';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Language() {

    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const changeLanguage = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
        handleClose();
    }
    const BreakPoints = { display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } };

    return (
        <Box>

            <Button variant='text' onClick={handleClick}>
                {i18n.language === "ru" ? (
                    <Stack direction='row' spacing={1}>
                        <Image alt='russian-flag' src='/images/Flag_of_Russia 1.png' width='25px' height='20px' />
                        <Typography sx={BreakPoints} textTransform='capitalize'>Русский</Typography>
                    </Stack>
                ) :
                    (
                        <Stack direction='row' spacing={1} borderRaius='100px' bacgroundColor='red'>
                            <Stack borderRadius="50%">
                                <Image alt='english-flag' sx={{ borderRadius: '100px' }} src='/images/EnglishFlag.png' width='25px' height='20px' />
                            </Stack>
                            <Typography sx={BreakPoints} textTransform='capitalize' >English</Typography>
                        </Stack>

                    )
                }
            </Button>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ zIndex: '100', position: 'absolute' }}
                MenuListProps={{
                    'aris-labelledby': 'basic-button',
                }}

            >
                <MenuItem
                    onClick={() => changeLanguage('ru')}
                >
                    <Stack direction='row' spacing={1}>
                        <Image alt='russian-flag' src='/images/Flag_of_Russia 1.png' width='25px' height='20px' />
                        <Typography>Русский</Typography>
                    </Stack>
                </MenuItem>
                <MenuItem
                    onClick={() => changeLanguage('en')}
                >
                    <Stack direction='row' spacing={1}>
                        <Image alt='english-flag' src='/images/EnglishFlag.png' width='25px' height='20px' />
                        <Typography>English</Typography>
                    </Stack>
                </MenuItem>

            </Menu>
        </Box>
    )
}

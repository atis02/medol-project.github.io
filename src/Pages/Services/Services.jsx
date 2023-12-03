import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Services() {
    const { t } = useTranslation()
    const mediaQuery = { display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }

    return (
        <>
            <Typography fontSize='1.5rem' textAlign='center' m='50px 0 10px 0' fontWeight='600' color='#0D4C93'>УСЛУГИ</Typography>
            <Box className='service'>
                <Container direction='row' >
                    <Stack spacing={3} direction='row' justifyContent='space-between' flexWrap='wrap' position='relative' >
                        <Stack className='imgService2' direction='column' alignItems='center' boxShadow='0px 2px 6px 0px rgba(0, 0, 0, 0.05)' backgroundColor='#fff' width='360px' height='530px' >
                            <Image alt='' className='imgService' width='100%' height='260px' src='/images/servic 1.png' />
                            <Typography color='#0D4C93' textAlign='center' fontSize='20px' m='22px 0 14px 0' fontWeight='600'>СЕРВИС ОБОРУДОВАНИЯ</Typography>
                            <Typography p='0px 40px 20px 40px' textAlign='center'>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</Typography>
                            <NavLink className='history-link' to='/services'>
                                <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '250px', height: '50px' }}>Посмотреть все</Button>
                            </NavLink>
                        </Stack>
                        <Stack className='imgService2' direction='column' alignItems='center' boxShadow='0px 2px 6px 0px rgba(0, 0, 0, 0.05)' backgroundColor='#fff' width='360px' height='530px' >
                            <Image alt='' className='imgService' width='100%' height='260px' src='/images/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png ' />
                            <Typography color='#0D4C93' textAlign='center' fontSize='20px' m='22px 0 14px 0' fontWeight='600'>РЕГИСТРАЦИИ</Typography>
                            <Typography p='0px 20px 10px 20px' textAlign='center'>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</Typography>
                            <NavLink className='history-link' to='/services'>
                                <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '250px', height: '50px' }}>Посмотреть все</Button>
                            </NavLink>
                        </Stack>
                        <Stack className='imgService2' direction='column' alignItems='center' boxShadow='0px 2px 6px 0px rgba(0, 0, 0, 0.05)' backgroundColor='#fff' width='360px' height='530px'>
                            <Image alt='' width='100%' height='260px' className='imgService' src='/images/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png' />
                            <Typography color='#0D4C93' textAlign='center' fontSize='20px' m='22px 0 14px 0' fontWeight='600'>УСЛУГИ ЛОГИСТИКИ</Typography>
                            <Typography p='0px 20px 10px 20px' textAlign='center'>{t("test")}</Typography>
                            <NavLink className='history-link' to='/services'>
                                <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '250px', height: '50px' }}>Посмотреть все</Button>
                            </NavLink>
                        </Stack>
                    </Stack>
                </Container >
            </Box >
        </>
    )
}

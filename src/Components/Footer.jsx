import React, { useState } from 'react'
import { Box, Stack, Typography, Container, Button, Modal, TextField, Checkbox, useMediaQuery } from '@mui/material'
import Image from 'mui-image'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';

export default function Footer() {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const mediaQuery = { display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' } }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <Box className='service' height='100%' mt='100px'>
            <Container sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                <Stack sx={{ width: { lg: '60%', sm: '60%', xs: '100%' } }} direction='column' spacing={{ lg: 6, xs: 0 }}>
                    <Stack direction='row' spacing={{ lg: 7, xs: 0 }} sx={{ display: { lg: 'flex', xs: 'column' } }}>
                        <Stack sx={{ display: { lg: 'none' }, alignItems: 'center' }} >
                            <Image alt='' width='210px' height='60px' src='/images/logo 1.png' />
                        </Stack>

                        <Typography fontSize='28px' color='#595959'>Контакты</Typography>
                        <Stack direction='column' spacing={{ lg: 1, xs: 0 }} >
                            <Stack direction='row' alignItems='center' spacing={{ lg: 3, xs: 0 }} sx={{ display: { lg: 'flex', xs: 'column' } }}>

                                <Stack direction='row' alignItems='center' spacing={{ lg: 1, xs: 0 }}>
                                    <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>

                                        <Image width='25px' height='25px' alt='/' src='/images/maps-and-flags 1.svg' />
                                    </Stack>
                                    <Stack direction='column' sx={{ width: { xs: '200px' } }} >
                                        <Typography fontSize='14px'>
                                            г.Ташкент, Чиланзар
                                        </Typography>
                                        <Typography fontSize='14px'>
                                            10 квартал, дом 3/1
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' alignItems='center' spacing={{ lg: 1, xs: 0 }}>
                                    <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                        <Image width='22px' height='22px' alt='/' src='/images/phone-call (1) 1.svg' />
                                    </Stack>
                                    <Stack direction='column' sx={{ width: { xs: '200px' } }} >
                                        <Typography fontSize='14px'>
                                            +998 71 276-62-53
                                        </Typography>
                                        <Typography fontSize='14px'>
                                            +998 71 276-62-54
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack direction='row' alignItems='center' spacing={{ lg: 7, xs: 0 }} sx={{ flexDirection: { xs: 'column' } }}>

                                <Stack direction='row' alignItems='center' spacing={{ lg: 1, xs: 0 }}>
                                    <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                        <Image width='22px' height='22px' alt='/' src='/images/email 1.svg' />
                                    </Stack>
                                    <Stack direction='column'>
                                        <Typography fontSize='14px'>
                                            info@medol.uz
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Button onClick={handleOpen} sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Оставить заявку</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Stack direction='row' justifyContent='end'>
                                                <CloseIcon onClick={handleClose} />
                                            </Stack>
                                            <Typography color='#5A5A5A' textAlign='center' fontSize='26px' fontWeight='600' mb='20px'>
                                                Оставьте заявку
                                            </Typography>
                                            <Stack spacing={2}>

                                                <TextField id="outlined-basic" label="ФИО" />
                                                <TextField id="outlined-basic" label="Номер телефона*" />
                                                <TextField id="outlined-basic" label="Тема обращения*" />
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Сообщение*"
                                                    multiline
                                                    rows={4}
                                                />
                                            </Stack>
                                            <Stack direction='row' alignItems='center'>
                                                <Checkbox />
                                                <Typography>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</Typography>
                                            </Stack>
                                            <Stack direction='row' justifyContent='center'>
                                                <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Отправить</Button>
                                            </Stack>

                                        </Box>
                                    </Modal>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={{ lg: 4, xs: 0 }}>
                        <Image alt='' width='200px' sx={{ display: { lg: 'flex', xs: 'none' } }} height='58px' src='/images/logo 1.png' />
                        <Typography width='362px' height='95px'>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ display: { lg: 'flex', sm: 'none', xs: 'none' } }}>
                    <Stack spacing={1} width='190px' height='164px'>
                        <Typography fontSize='22px' color='#595959'>O компании</Typography>
                        <NavLink className='footer-link' to='/'>История</NavLink>
                        <NavLink className='footer-link' to='/'>Партнеры</NavLink>
                        <NavLink className='footer-link' to='/'>Вакансии</NavLink>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontSize='22px' color='#595959'>Продукция</Typography>
                        <NavLink className='footer-link' to='/'>Эндоваскулярная хирургия</NavLink>
                        <NavLink className='footer-link' to='/'>Аритмология</NavLink>
                        <NavLink className='footer-link' to='/'>Кардиохирургия</NavLink>
                        <NavLink className='footer-link' to='/'>Лабораторная диагностика</NavLink>
                        <NavLink className='footer-link' to='/'>Хирургия</NavLink>
                        <NavLink className='footer-link' to='/'>Эндоурология</NavLink>
                        <NavLink className='footer-link' to='/'>Нейрохирургия</NavLink>
                        <NavLink className='footer-link' to='/'>Анестезиология и реанимация Диабет</NavLink>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontSize='22px' color='#595959'>Услуги</Typography>
                        <NavLink className='footer-link' to='/'>Сервис</NavLink>
                        <NavLink className='footer-link' to='/'>Регистрации</NavLink>
                        <NavLink className='footer-link' to='/'>Услуги логистики</NavLink>
                    </Stack>
                </Stack>
            </Container>
            <Container sx={{ display: 'flex', mt: '50px', justifyContent: 'space-between' }}>
                <Typography color='#353535' fontSize='17px'>© 2021 ООО «Medical Online Services»</Typography>
                <Typography color='#353535' fontSize='17px'>Сайт разработан компанией<NavLink to='/'>www.uz</NavLink></Typography>
            </Container>
        </Box >
    )
}

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer2() {
    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <Typography>Контакты</Typography>
                <Stack direction='column' alignItems='start'>
                    <Stack direction='row' >
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
                    <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={{ lg: 7, xs: 0 }} sx={{ flexDirection: { lg: 'row', xs: 'column' } }}>

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
                            <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Оставить заявку</Button>
                            {/* <Modal
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
                            </Modal> */}
                        </Stack>
                    </Stack>

                </Stack>

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
            </Box>
        </Container>
    )
}

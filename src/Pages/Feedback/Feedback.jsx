import React, { useState } from 'react'
import { Box, Stack, Typography, Container, Button, Modal, TextField, Checkbox, Input, InputLabel, InputAdornment } from '@mui/material'
import Image from 'mui-image'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

export default function Feedback() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const style2 = {
        borderRadius: '35px',
        background: 'linear - gradient(180deg, #F8F8F8 0 %, rgba(248, 248, 248, 0.00) 100 %)',

        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)'

    }

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
        <Container>
            <Box>

                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography fontSize='1.5rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>Контакты и обратная связь</Typography>
                    <Stack direction='row' spacing={1} m='50px 0 30px 0'>
                        <NavLink className='history-link' to='/'>Главная</NavLink> /
                        <NavLink className='history-link' to='/feedback'>Контакты и обратная связь</NavLink>
                    </Stack>
                </Stack>
                <Stack direction='row' alignItems='center' spacing={8}>
                    <Stack direction='column' spacing={3}>
                        <Typography fontSize='24px' color='#000'>Главный офис в Ташкенте</Typography>
                        <Stack direction='column' spacing={1}>
                            <Stack direction='row' alignItems='center' spacing={3}>

                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>

                                        <Image width='25px' height='25px' alt='/' src='/images/maps-and-flags 1.svg' />
                                    </Stack>
                                    <Stack direction='column' >
                                        <Typography fontSize='14px'>
                                            г.Ташкент, Чиланзар
                                        </Typography>
                                        <Typography fontSize='14px'>
                                            10 квартал, дом 3/1
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                        <Image width='22px' height='22px' alt='/' src='/images/phone-call (1) 1.svg' />
                                    </Stack>
                                    <Stack direction='column'>
                                        <Typography fontSize='14px'>
                                            +998 71 276-62-53
                                        </Typography>
                                        <Typography fontSize='14px'>
                                            +998 71 276-62-54
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack direction='row' alignItems='center' spacing={7}>

                                <Stack direction='row' alignItems='center' spacing={1}>
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
                    <Image alt='' sx={{ borderRadius: '35px' }} src='/images/image 3.png' />
                </Stack>
                <Stack mt='30px'>
                    <Typography fontSize='24px' color='#000' >Наши филиалы в других регионах</Typography>
                    <Stack direction='row' justifyContent='space-between' spacing={4} mt='30px'>
                        <Stack sx={style2} p='40px' width='50%' >
                            <Stack direction='column' spacing={1}>
                                <Typography fontSize='24px' color='#000' mb='25px'>Ферганская область:</Typography>
                                <Stack direction='row' alignItems='center' spacing={3}>

                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>

                                            <Image width='25px' height='25px' alt='/' src='/images/maps-and-flags 1.svg' />
                                        </Stack>
                                        <Stack direction='column' >
                                            <Typography fontSize='14px'>
                                                г.Фергана, Алишер. Н
                                            </Typography>
                                            <Typography fontSize='14px'>
                                                10 квартал, дом 3/1
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                            <Image width='22px' height='22px' alt='/' src='/images/phone-call (1) 1.svg' />
                                        </Stack>
                                        <Stack direction='column'>
                                            <Typography fontSize='14px'>
                                                +998 71 276-60-00
                                            </Typography>
                                            <Typography fontSize='14px'>
                                                +998 71 276-62-54
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' alignItems='center' spacing={7}>

                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                            <Image width='22px' height='22px' alt='/' src='/images/email 1.svg' />
                                        </Stack>
                                        <Stack direction='column'>
                                            <Typography fontSize='14px'>
                                                info@medol.uz
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>На карте</Button>

                                </Stack>

                            </Stack>
                        </Stack>
                        <Stack sx={style2} p='40px' width='50%' >
                            <Stack direction='column' spacing={1}>
                                <Typography fontSize='24px' color='#000' mb='25px'>Самаркандская область:</Typography>
                                <Stack direction='row' alignItems='center' spacing={3}>

                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>

                                            <Image width='25px' height='25px' alt='/' src='/images/maps-and-flags 1.svg' />
                                        </Stack>
                                        <Stack direction='column' >
                                            <Typography fontSize='14px'>
                                                г.Самарканд, Навои
                                            </Typography>
                                            <Typography fontSize='14px'>
                                                10 квартал, дом 3/1
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                            <Image width='22px' height='22px' alt='/' src='/images/phone-call (1) 1.svg' />
                                        </Stack>
                                        <Stack direction='column'>
                                            <Typography fontSize='14px'>
                                                +998 71 276-30-00
                                            </Typography>
                                            <Typography fontSize='14px'>
                                                +998 71 276-62-54
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack direction='row' alignItems='center' spacing={7}>

                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Stack width='40px' height='40px' direction='row' justifyContent='center' alignItems='center' backgroundColor='#fff' borderRadius='100px'>
                                            <Image width='22px' height='22px' alt='/' src='/images/email 1.svg' />
                                        </Stack>
                                        <Stack direction='column'>
                                            <Typography fontSize='14px'>
                                                info@medol.uz
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>На карте</Button>

                                </Stack>

                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
                <Stack mt='30px'>
                    <Typography fontSize='24px' color='#000' >Свяжитесь с нами</Typography>
                    <Stack direction='row' justifyContent='space-between' spacing={6} mt="30px">
                        <TextField
                            id="input-with-icon-textfield"
                            fullWidth
                            placeholder='Ваше имя'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image alt='' src='/images/user_2_fill.svg' width='18px'
                                            height='20px' />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '35px',
                                    backgroundColor: '#EFEFEF'
                                }
                            }}
                            variant="outlined"
                        />

                        <TextField
                            fullWidth
                            id="input-with-icon-textfield"
                            placeholder='Тема обращения'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image alt='' src='/images/docment_fill.svg' width='18px'
                                            height='20px' />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '35px',
                                    backgroundColor: '#EFEFEF'
                                }
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder='Email или телефон'
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image alt='' src='/images/Union.svg' width='18px'
                                            height='20px' />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '35px',
                                    backgroundColor: '#EFEFEF'

                                }
                            }}
                            variant="outlined"
                        />

                    </Stack>
                    <Stack mt='25px'>
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Сообщение"
                            multiline
                            rows={4}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <Image alt='' src='/images/font_size_fill.svg' sx={{ mt: '15px' }} width='25px'
                                            height='20px' />
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: '35px',
                                    display: 'flex',
                                    alignItems: 'start',
                                    backgroundColor: '#EFEFEF',
                                    height: '195px'
                                }
                            }}
                        />
                        <Stack direction='row' alignItems='center' mt='20px'>
                            <Checkbox />
                            <Typography>Я даю согласие OOO Medol и его аффилированным лицам на обработку моих персональных данных в целях рассмотрения моего обращения, определенных в Положении об обработке персональных данных.</Typography>
                        </Stack>
                        <Stack direction='row' justifyContent='center'>
                            <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Отправить</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

import React, { useState } from 'react'
import { Box, Container, Stack, Typography, Button, Modal, TextField, Checkbox, InputAdornment } from '@mui/material'
import Image from 'mui-image'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

export default function AboutCompany() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
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
                    <Typography fontSize='1.5rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>О компании</Typography>
                    <Stack direction='row' spacing={1} m='50px 0 30px 0'>
                        <NavLink className='history-link' to='/'>Главная</NavLink> /
                        <NavLink className='history-link' to='/about'>О компании</NavLink>
                    </Stack>
                </Stack>
                <Stack>
                    <Typography>
                        Наша история началась в 2011 году, когда возникали большие трудности в ведении бизнеса с иностранными партнерами. Несмотря на все преграды, компания уверенными шагами внедряла новые технологии и обучала врачей Узбекистана. Оглядываясь назад, и, смотря на сегодняшние достижения врачей, мы с гордостью говорим, что мы не зря старались и верили в их результат.<br /><br />
                        Сегодня врачи в области кардиохирургии делают операции по установки стентов, и людям не приходиться выезжать в соседние страны для получения медицинского обслуживания. В Узбекистане растет и развивается сеть лабораторий VITROS, где функционирует наше оборудование от Johnson & Johnson, и мы рады, что население Узбекистана могут пройти диагностику на мировом оборудовании и получить точный и достоверный результат.<br /><br />
                        Еще одним нашим достижением является внедрение и бесперебойные поставки шовного хирургического материала ETHICON, мы гордимся, что наши хирурги, как хирурги других стран, пользуются и работают самыми популярными и качественными нитями. К 2022 году мы выросли по количеству компаний, входящих в состав группы компании MEDOL. На сегодняшний день успешно функционирует 4 организации, имеющих свою миссию, цель и сферу деятельности. <br />
                        Сегодня MEDOL продолжает расти и развиваться. Мы гордимся пройденным путем и достигнутыми результатами, и, в то же время, четко видим новые цели и направления движения. Наша сила и наша обязанность – в создании эффективной команды, дистрибуции, обеспечивающей новыми технологиями в сфере медицины и возможностью лечения и получения качественной медицинской помощи в Узбекистане.
                    </Typography>
                </Stack>
                <Stack direction='column' alignItems='start' spacing={8} mt='40px'>
                    <Stack direction='column' spacing={2}>
                        <Typography fontSize='24px' color='#000'>Главный офис в Ташкенте</Typography>
                        <Stack direction='row' spacing={1}>
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
                    <Stack spacing={2}>
                        <Typography fontSize='24px' color='#000'>Как до нас добраться</Typography>

                        <Image alt='' sx={{ borderRadius: '35px', height: '557px' }} src='/images/image 4.png' />
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
                </Stack>
            </Box>
        </Container>
    )
}

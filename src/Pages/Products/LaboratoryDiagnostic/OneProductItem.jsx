import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Stack, Button, Modal, TextField, Checkbox } from '@mui/material'
import Image from 'mui-image'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import LabdDiagnosticAll from './LabdDiagnosticAllItems.mjs'
import CloseIcon from '@mui/icons-material/Close';
import TabPanel from './TabPanel'

export default function LabDiagnostic() {

    const Image2 = localStorage.getItem('medol-item')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const style3 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const { id } = useParams();
    const { item } = useParams();
    useLocation(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])
    const { name } = useParams();

    const style = { fontSize: '20px', textAlign: 'left', color: '#5A5A5A' }
    const style2 = { fontSize: '20px', textAlign: 'left', color: '#0D4C93' }
    return (
        <Container>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Typography fontSize='2rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>{item}</Typography>
                <Stack direction='row' spacing={1} m='50px 0 30px 0' width='300px' >
                    <NavLink className='history-link' to='/'>Главная</NavLink> /
                    <NavLink className='history-link' to={`/products/${id}`}>Продукция</NavLink>/
                    <NavLink className='history-link' to={`/products/${item}`}>{item}</NavLink>
                </Stack>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Stack borderRadius='35px' p='25px' backgroundColor='#FFF' boxShadow='0px 2px 4px 0px rgba(0, 0, 0, 0.10)'>

                    <Image src={Image2} alt='' width='350px' height='100%' />
                </Stack>
                <Stack width='50%'>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Typography sx={style} >Страна :</Typography>
                        <Typography sx={style2}> Франция</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Typography sx={style}>Категория : </Typography>
                        <Typography sx={style2}> {id}</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Typography sx={style}>Производитель :</Typography>
                        <Typography sx={style2}> Horiba</Typography>
                    </Stack>
                    <Typography fontSize='20px' textAlign='left' color='#5A5A5A'>Автоматический настольный анализатор гемостаза для лабораторий среднего размера.</Typography>

                    <Stack direction='row' spacing={2}>

                        <Stack>
                            <Button onClick={handleOpen} sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Запросить цену</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style3}>
                                    <Stack direction='row' justifyContent='end'>
                                        <CloseIcon onClick={handleClose} />
                                    </Stack>
                                    <Typography color='#5A5A5A' textAlign='center' fontSize='26px' fontWeight='600' mb='20px'>
                                        Запросить цену
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
                                        <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Запросить цену</Button>
                                    </Stack>

                                </Box>
                            </Modal>
                        </Stack>
                        <Stack>
                            <Button onClick={handleOpen} sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', border: '1px solid #000', background: 'white', borderRadius: '100px', fontSize: '14px', color: '#000', width: '200px', height: '40px' }}>Оставить заявку</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style3}>
                                    <Stack direction='row' justifyContent='end'>
                                        <CloseIcon onClick={handleClose} />
                                    </Stack>
                                    <Typography color='#5A5A5A' textAlign='center' fontSize='26px' fontWeight='600' mb='20px'>
                                        Оставить заявку
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
                                        <Button sx={{ p: '14px 19px 14px 19px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '14px', color: '#fff', width: '200px', height: '40px' }}>Оставить заявку</Button>
                                    </Stack>

                                </Box>
                            </Modal>
                        </Stack>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' width='70%' height='60px' p='15px' borderRadius='25px' backgroundColor='#FFF' boxShadow=' 0px 2px 4px 0px rgba(0, 0, 0, 0.10)'>
                        <Typography sx={style}>Поделится</Typography>
                        <Stack direction='row' spacing={1}>
                            <NavLink to='https://m.facebook.com'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M20 10.0619C20 4.50335 15.5206 0 10 0C4.47563 0 0 4.50335 0 10.0619C0 15.0829 3.65562 19.246 8.4375 20V12.9711H5.89813V10.0626H8.4375V7.84454C8.4375 5.3234 9.92813 3.93108 12.2131 3.93108C13.3075 3.93108 14.4531 4.12728 14.4531 4.12728V6.60315H13.19C11.95 6.60315 11.5625 7.37981 11.5625 8.17533V10.0619H14.3356L13.89 12.9705H11.5625V19.9994C16.3406 19.2454 20 15.0822 20 10.0613V10.0619Z" fill="#5A5A5A" />
                                </svg>
                            </NavLink>
                            <NavLink to='https://www.instagram.com/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.6643 6.66525C8.8281 6.66525 7.32961 8.16376 7.32961 10C7.32961 11.8362 8.8281 13.3348 10.6643 13.3348C12.5005 13.3348 13.999 11.8362 13.999 10C13.999 8.16376 12.5005 6.66525 10.6643 6.66525ZM20.6659 10C20.6659 8.61907 20.6784 7.25064 20.6008 5.87221C20.5233 4.27113 20.158 2.85017 18.9873 1.67938C17.814 0.506085 16.3956 0.14334 14.7945 0.065788C13.4136 -0.0117644 12.0452 0.000744113 10.6668 0.000744113C9.2859 0.000744113 7.9175 -0.0117644 6.53909 0.065788C4.93804 0.14334 3.51711 0.508587 2.34634 1.67938C1.17307 2.85267 0.81033 4.27113 0.732779 5.87221C0.655228 7.25314 0.667736 8.62157 0.667736 10C0.667736 11.3784 0.655228 12.7494 0.732779 14.1278C0.81033 15.7289 1.17557 17.1498 2.34634 18.3206C3.51961 19.4939 4.93804 19.8567 6.53909 19.9342C7.92 20.0118 9.2884 19.9993 10.6668 19.9993C12.0477 19.9993 13.4161 20.0118 14.7945 19.9342C16.3956 19.8567 17.8165 19.4914 18.9873 18.3206C20.1605 17.1473 20.5233 15.7289 20.6008 14.1278C20.6809 12.7494 20.6659 11.3809 20.6659 10ZM10.6643 15.131C7.82494 15.131 5.53343 12.8394 5.53343 10C5.53343 7.16058 7.82494 4.86903 10.6643 4.86903C13.5037 4.86903 15.7952 7.16058 15.7952 10C15.7952 12.8394 13.5037 15.131 10.6643 15.131ZM16.0053 5.8572C15.3424 5.8572 14.807 5.32184 14.807 4.65889C14.807 3.99594 15.3424 3.46058 16.0053 3.46058C16.6682 3.46058 17.2036 3.99594 17.2036 4.65889C17.2038 4.81631 17.1729 4.97222 17.1128 5.1177C17.0526 5.26317 16.9644 5.39535 16.8531 5.50666C16.7418 5.61798 16.6096 5.70624 16.4641 5.76639C16.3186 5.82654 16.1627 5.8574 16.0053 5.8572Z" fill="#5A5A5A" />
                                </svg>
                            </NavLink>
                            <NavLink to='https://web.telegram.org/a/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clip-path="url(#clip0_611_1370)">
                                        <path d="M10.333 0.3125C4.80881 0.3125 0.333008 4.64844 0.333008 10C0.333008 15.3516 4.80881 19.6875 10.333 19.6875C15.8572 19.6875 20.333 15.3516 20.333 10C20.333 4.64844 15.8572 0.3125 10.333 0.3125ZM15.2443 6.94922L13.6032 14.4414C13.4822 14.9727 13.1556 15.1016 12.6999 14.8516L10.1999 13.0664L8.9943 14.1914C8.86123 14.3203 8.74833 14.4297 8.49027 14.4297L8.66768 11.9648L13.3007 7.91016C13.5024 7.73828 13.2564 7.64062 12.9903 7.8125L7.26446 11.3047L4.79672 10.5586C4.26043 10.3945 4.24833 10.0391 4.90962 9.78906L14.5507 6.1875C14.9983 6.03125 15.3895 6.29297 15.2443 6.94922Z" fill="#5A5A5A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_611_1370">
                                            <rect width="20" height="20" fill="white" transform="translate(0.333008)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </NavLink>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack>
                <TabPanel />
            </Stack>
        </Container >
    )
}

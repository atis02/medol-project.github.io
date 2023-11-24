import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'mui-image'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    const mediaQuery = { display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' } }
    const mediaQuery2 = { lineHeight: { lg: '226%', md: '200%', sm: '150%', xs: '100%' } }

    return (
        <Container  >
            <Typography fontSize='1.5rem' textAlign='center' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>О КОМПАНИИ</Typography>
            <Box mb='30px' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack sx={mediaQuery}>
                    <img alt='' className='circle4' width='474px' height='474px' src='/images/Ellipse 4.png' />
                    <img alt='' className='circle3' width='330px' height='330px' src='/images/Ellipse 5.png' />
                    <img alt='' className='circle2' width='252px' height='252px' src='/images/Ellipse 6.png' />
                    <img alt='' className='circle1' width='150px' height='48px' src='/images/logo 2.png' />
                </Stack>
                <Stack className='about' pl='34px'>
                    <Typography color='#363535' >
                        Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
                    </Typography>
                    <NavLink className='history-link' to='/about'>
                        <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '270px', height: '50px' }}>Узнать больше</Button>
                    </NavLink>
                </Stack>
            </Box>
        </Container>
    )
}

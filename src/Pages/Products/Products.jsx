import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import ProductItems from './ProductItems.mjs'
import Image from 'mui-image'
import { NavLink } from 'react-router-dom'

export default function Products() {

    const BreakPoints2 = { fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' } };

    return (
        <Container>
            <Typography fontSize='1.5rem' textAlign='center' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>ПРОДУКЦИЯ</Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='space-between'  >
                {ProductItems.map((product) =>
                    <Stack direction='column' key={product.id} justifyContent='flex-end' mt='10px' borderRadius='35px' backgroundColor='#F8F8F8' width='350px' height='420px' alignItems='center'>
                        <Image alt={product.name} width={product.width} height={product.height} src={product.image} />
                        <Typography pt='35px' textAlign='center' color='#363535' fontSize=' 24px'>{product.name}</Typography>
                        <NavLink to={`/products`}>
                            <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff' }}>Посмотреть все</Button>
                        </NavLink>
                    </Stack>
                )}
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='center' m='30px 0 30px 0' spacing={2}>
                <NavLink className='history-link' to='/products'>
                    <Typography color='#0D4C93' sx={BreakPoints2}>
                        Перейти в каталог нашей продукции
                    </Typography>
                </NavLink>
                <Image alt='' width='20px' height='20px' src='/images/up-arrow (1) 1.svg' />
            </Stack>
        </Container >
    )
}

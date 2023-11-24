import React, { useEffect } from 'react'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import Image from 'mui-image'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import LabdDiagnosticAll from './LabdDiagnosticAllItems.mjs'


export default function LabDiagnostic() {

  const { id } = useParams();
  const { name } = useParams();
  useLocation(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])
  return (
    <Container>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography fontSize='2rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>{name}</Typography>
        <Stack direction='row' spacing={1} m='50px 0 30px 0'>
          <NavLink className='history-link' to='/'>Главная</NavLink> /
          <NavLink className='history-link' to={`/products/${id}`}>Продукция</NavLink>/
          <NavLink className='history-link' to={`/products/${name}`}>{name}</NavLink>
        </Stack>
      </Stack>
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between'  >
        {LabdDiagnosticAll.map((product) =>
          <Stack direction='column' key={product.id} justifyContent='flex-end' mt='10px' borderRadius='35px' backgroundColor='#F8F8F8' width='350px' height='450px' alignItems='center'>
            <Image alt={product.title} width='180px' height='176px' src={product.image} />
            <Typography pt='35px' textAlign='center' color='#363535' fontSize=' 24px'>{product.title}</Typography>
            <Stack direction='row' alignItems='center' pt='10px'>
              <Typography textAlign='center' color='#5A5A5A' fontSize=' 18px'>Страна:</Typography>
              <Typography fontSize=' 18px' color='#0D4C93'>Франция</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' pt='5px'>
              <Typography textAlign='center' color='#5A5A5A' fontSize=' 18px'>Производитель:</Typography>
              <Typography fontSize=' 18px' color='#0D4C93'>Horiba</Typography>
            </Stack>

            <NavLink to={`/products/${id}/${product.title}/${product.title}`}>
              <Button onClick={() => {
                localStorage.setItem('medol-item', product.image)
              }} sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff' }}>Подробнее</Button>
            </NavLink>
          </Stack>
        )}
      </Stack>
    </Container >
  )
}

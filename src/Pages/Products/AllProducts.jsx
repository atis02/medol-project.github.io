import { Box, Grid, Container, Button, InputLabel, MenuItem, Select, Stack, Typography, FormControl, Card, CardActionArea, CardMedia } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ProductItems from './productItems.mjs';
import Image from 'mui-image';
import Navbar from '../../Components/Navbar';

export default function AllProducts() {

    const { id } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [direction, setDirection] = useState('');

    const handleChange = (e) => {
        setBrand(e.target.value)
    }
    const handleChange2 = (e) => {
        setCategory(e.target.value)
    }
    const handleChange3 = (e) => {
        setDirection(e.target.value)
    }

    return (
        <>
            <Container >
                <Box direction='row'>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>

                        <Typography fontSize='1.5rem' textAlign='left' m='50px 0 30px 0' fontWeight='600' color='#0D4C93'>ПРОДУКЦИЯ</Typography>
                        <Stack direction='row' spacing={1} m='50px 0 30px 0'>
                            <NavLink className='history-link' to='/'>Главная</NavLink> /
                            <NavLink className='history-link' to='/products'>продукция</NavLink>
                        </Stack>
                    </Stack>
                    <Stack borderRadius='55px' mb='50px' border='1px solid #F9F9F9' p='15px' alignItems='center' direction='row' spacing={3} justifyContent='space-between' backgroundColor='#F9F9F9' boxShadow=' 0px 2px 4px 0px rgba(0, 0, 0, 0.10)'>
                        <Typography fontSize='26px'>Фильтр:</Typography>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Бренд</InputLabel>
                            <Select
                                sx={{ backgroundColor: '#fff', borderRadius: '55px' }}
                                value={brand}
                                onChange={handleChange}
                                label='Бренд'
                            >
                                <MenuItem value='Бренд 1'>Бренд 1</MenuItem>
                                <MenuItem value='Бренд 2'>Бренд 2</MenuItem>
                                <MenuItem value='Бренд 3'>Бренд 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                            <Select
                                sx={{ backgroundColor: '#fff', borderRadius: '55px' }}
                                label='Категория'
                                value={category}
                                onChange={handleChange2}
                            >
                                <MenuItem value='Категория 1'>Категория 1</MenuItem>
                                <MenuItem value='Категория 2'>Категория 2</MenuItem>
                                <MenuItem value='Категория 3'>Категория 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Направление</InputLabel>
                            <Select
                                sx={{ backgroundColor: '#fff', borderRadius: '55px' }}
                                value={direction}
                                onChange={handleChange3}
                                label='Направление'
                            >
                                <MenuItem value='Направление 1'>Направление 1</MenuItem>
                                <MenuItem value='Направление 2'>Направление 2</MenuItem>
                                <MenuItem value='Направление 3'>Направление 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Box>
                <Stack direction='row' flexWrap='wrap' justifyContent='space-between'  >
                    {ProductItems.map((product) =>
                        <Stack direction='column' key={product.id} justifyContent='flex-end' mt='10px' borderRadius='35px' backgroundColor='#F8F8F8' width='350px' height='400px' alignItems='center'>
                            <Image alt={product.name} width={product.width} height={product.height} src={product.image} />
                            <Typography pt='35px' textAlign='center' color='#363535' fontSize=' 24px'>{product.name}</Typography>
                            <NavLink to={`/products/${product.name}`}>
                                <Button sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff' }}>Посмотреть все</Button>
                            </NavLink>
                        </Stack>
                    )}
                    <Grid container spacing={5} mt={5}>
                        {ProductItems.map((item, i) => (
                            <Grid item lg={4} md={6} sm={6} xs={12} key={`productItems_key${i}`}>
                                <Card sx={{ borderRadius: 15 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="200"
                                            image={item.image}
                                        />
                                        <Typography mt={3} align='center'>{item.name} </Typography>
                                        <Stack mb={3} mt={3} direction='row' justifyContent='center'>
                                            <Button variant='contained'>More</Button>
                                        </Stack>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </>
    )
}

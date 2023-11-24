import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';
import Image from 'mui-image';
import NewsData from './NewsData.mjs'
import { NavLink } from 'react-router-dom';

function CustomTabPanel(props) {

    const [tab, setTab] = useState();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && (
                <Box sx={{ p: "10px" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Box m='30px 0 10px 0'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label='Новости' sx={{ backgroundColor: '#F9F9F9', boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)', width: '250px', color: '#000', '&:focus': { backgroundColor: '#0D4C93', color: '#fff' }, borderRadius: '25px' }}{...a11yProps(0)} />
                    <Tab label="Акции" sx={{ ml: '20px', backgroundColor: '#F9F9F9', boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)', width: '300px', color: '#000', '&:focus': { backgroundColor: '#0D4C93', color: '#fff' }, borderRadius: '25px' }}{...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className='tabpanel' width='100%'>
                <Stack direction='row' flexWrap='wrap' justifyContent='space-between'>
                    {
                        NewsData.map((news, index) =>
                            <Stack key={index} width='352px' direction='column' alignItems='center' borderRadius='35px' border=' 2px solid #F6F6F6' opacity='0.9' background='linear-gradient(180deg, #F8F8F8 0%, rgba(255, 255, 255, 0.00) 100%)'>
                                <Image alt='' sx={{ borderRadius: '35px' }} width='335px' height='250px' src={news.image} />
                                <Typography color='#0D4C93' textAlign='center' fontSize='20px' m='22px 0 14px 0' fontWeight='600'>{news.title}</Typography>
                                <Typography>{news.date}</Typography>
                                <Typography textAlign='center'>{news.description}</Typography>
                                <NavLink to={`/news/${index}`}>
                                    <Button onClick={() => {
                                        localStorage.setItem('medol-news', JSON.stringify([news.title, news.image]))
                                    }} sx={{ p: '14px 39px 14px 39px', m: '15px 0 20px 0', background: 'linear-gradient(90deg, #0D4C93 0%, #00C9C9 100%)', borderRadius: '100px', fontSize: '16px', color: '#fff', width: '270px', height: '50px' }}>Подробнее</Button>
                                </NavLink>
                            </Stack>
                        )
                    }
                </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Акции
            </CustomTabPanel>
        </Box >
    );
}
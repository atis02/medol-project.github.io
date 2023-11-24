import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';

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
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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
        <Box sx={{ width: '80%' }}>
            <Box m='30px 0 10px 0'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label='Описание' sx={{ backgroundColor: '#F9F9F9', boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)', width: '250px', color: '#000', '&:focus': { backgroundColor: '#0D4C93', color: '#fff' }, borderRadius: '25px' }}{...a11yProps(0)} />
                    <Tab label="Приложенные документы" sx={{ backgroundColor: '#F9F9F9', boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)', width: '300px', color: '#000', '&:focus': { backgroundColor: '#0D4C93', color: '#fff' }, borderRadius: '25px' }}{...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} className='tabpanel'>
                <Typography fontWeight='600'>
                    Производитель: Horiba <br /><br />
                </Typography>
                <Typography fontWeight='600'>
                    Анализатор гемостаза Yumizen G800 <br /><br />
                </Typography>

                Автоматический настольный анализатор гемостаза для лабораторий среднего размера.<br /><br />
                <Typography fontWeight='600'>
                    Умный способ тестирования <br />
                </Typography>
                - 4 независимых измерительных канала <br />
                - 14 охлаждаемых + 4 встроенных реагента <br />
                - 10 образцов + 5 положений образца STAT<br />
                - Автоматическая рефлексия и способность к повторному запуску<br />
                - Основная калибровочная кривая (калибровка не требуется)
                <Typography fontWeight='600'>
                    Комплексная безопасность<br />
                </Typography>
                - Положительная идентификация <br />
                - Внутреннее хранилище данных, встроенный компьютер<br />
                - Готовые к использованию реагенты <br />
                <Typography fontWeight='600'>
                    Повышенная эффективность <br />
                </Typography>
                - 3 эталонных метода измерения: коагуляционный, иммунотурбидиметрический и хромогенный<br />
                - Непрерывная загрузка: 60 образцов/600 кювет<br />
                - Производительность 160 тестов в час<br />
                - Бесплатная поддержка <br />
                <Typography fontWeight='600'>
                    Удобные функции<br />
                </Typography>
                - Интеллектуальное управление контролем качества<br />
                - Инновационный пользовательский интерфейс<br />
                - Несколько подключений: Лабораторная информационная система - VPN
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
        </Box>
    );
}
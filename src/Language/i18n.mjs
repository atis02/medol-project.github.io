import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            //navbar
            market: 'MARKET',
            about: 'ABOUT',
            products: 'PRODUCTS',
            services: 'SERVICES',
            news: 'NEWS',
            feedback: 'FEEDBACK/',
        },
    },
    ru: {
        translation: {
            //navbar
            market: 'МАГАЗИН',
            about: 'О КОМПАНИИ  ',
            products: 'ПРОДУКЦИЯ',
            services: 'УСЛУГИ',
            news: 'АКЦИИ И НОВОСТИ',
            feedback: 'ОБРАТНАЯ СВЯЗЬ',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
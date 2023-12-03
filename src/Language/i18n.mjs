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
            test2: 'sjgsjjgsgisgiio',
            test: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia sequi cum, porro tenetur ad vero magnam laborum, odit amet explicabo? Odio numquam tempora aut placeat itaque quae consequatur repellendus."
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
            test2: '26.07.2021 С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно - Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery(Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер- класс в исполнении...',
            test: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......"
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
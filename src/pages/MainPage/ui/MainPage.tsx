import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;

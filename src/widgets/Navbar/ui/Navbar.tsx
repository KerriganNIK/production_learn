import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={classes.mainLinks}
                >
                    {t('Главная')}
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

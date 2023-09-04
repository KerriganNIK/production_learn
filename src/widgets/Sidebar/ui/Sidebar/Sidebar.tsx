import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    function onToggle() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            data-testid="theme-switcher"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <Button
                onClick={onToggle}
                className={classes.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.main}
                    className={classes.item}
                >
                    <MainIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t('Главная')}
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.about}
                    className={classes.item}
                >
                    <AboutIcon className={classes.icon} />
                    <span className={classes.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lng} short={collapsed} />
            </div>
        </div>
    );
};

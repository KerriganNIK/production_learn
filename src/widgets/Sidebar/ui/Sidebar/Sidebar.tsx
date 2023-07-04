import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    function onToggle() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            data-testid="theme-switcher"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lng} />
            </div>
        </div>
    );
};

import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={classes.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                greg
            </Modal>
        </div>
    );
};

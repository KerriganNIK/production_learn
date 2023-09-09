import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    MouseEvent,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import classes from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;
export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    function onContentClick(e: MouseEvent) {
        e.stopPropagation();
    }
    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(classes.Modal, mods, [className])}>
                <div className={classes.overlay} onClick={closeHandler}>
                    <div className={classes.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

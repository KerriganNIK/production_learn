import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
    DEFAULT = 'default',
}

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        theme,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods = {
        [classes[theme]]: true,
    };

    return (
        <input
            className={classNames(classes.input, mods, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});

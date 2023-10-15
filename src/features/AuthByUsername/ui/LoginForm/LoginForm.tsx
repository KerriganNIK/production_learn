import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginAction } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selector/getLoginState/getLoginState';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error && <Text text={error} theme={TextTheme.ERROR} />}

            <Input
                type="text"
                className={classes.input}
                placeholder={t('Введите логин')}
                onChange={onChangeUsername}
                value={username}
            />

            <Input
                type="text"
                className={classes.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                className={classes.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

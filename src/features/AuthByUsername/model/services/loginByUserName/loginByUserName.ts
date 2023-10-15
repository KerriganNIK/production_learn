import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userAction } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserNameParams {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameParams, {rejectValue: string}>(
    'login/loginByUserName',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userAction.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    },
);

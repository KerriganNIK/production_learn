import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./providers/ThemeProviders";
import {classNames} from "../shared/lib/classNames";
import {AppRouter} from "./providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;
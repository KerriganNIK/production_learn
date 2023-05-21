import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../../../pages/AboutPage";
import {MainPage} from "../../../pages/MainPage";
import {AppRoutes, routeConfig} from "../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.keys(routeConfig).map((key: AppRoutes) => {
                    const {element, path} = routeConfig[key];
                    return(
                        <Route
                            key={path}
                            element={element}
                            path={path}
                        />
                    )
                })}
            </Routes>
        </Suspense>

    );
};

export default AppRouter;
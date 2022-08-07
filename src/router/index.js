//config.js
import * as React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import RoutesConfig from './config';

const renderRouter = (routerList) => {
    return routerList.map((item) => {
        const { path, exact, children } = item;
        return (
            <Route
                key={path}
                exact={exact}
                path={path}
                element={<item.element />}
            >
                {!!children &&
                    children.map((i) => {
                        return (
                            <Route
                                key={i.path}
                                exact={i.exact}
                                path={i.path}
                                element={<i.element />}
                            />
                        );
                    })}
            </Route>
        );
    });
};

const Routers = (props) => {
    console.log('props-->', props);
    return (
        <Router>
            <React.Suspense>
                <Routes>{renderRouter(RoutesConfig)}</Routes>
            </React.Suspense>
        </Router>
    );
};

export default React.memo(Routers);

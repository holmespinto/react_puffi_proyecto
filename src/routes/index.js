import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
// lazy load all the views

// root routes
const Pufi = React.lazy(() => import('../pufi'));
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/Pufi" />,
    route: Route,
};

// dashboards
const dashboardRoutes = {
    path: '/Pufi/',
    name: 'Pufi',
    icon: 'uil-home-alt',
    header: 'Navigation',
    children: [
        {
            path: '/Pufi',
            name: 'Aulaweb',
            component: Pufi,
            route: Route,
        }
    ],
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes

const authProtectedRoutes = [rootRoute, dashboardRoutes];
const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);

export { authProtectedRoutes, authProtectedFlattenRoutes };

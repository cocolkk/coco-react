// import Home from '../views/home';
import Javascript from '../views/js/javascript';
import VueComponet from '../views/vue/vue';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('../views/home'));
const RoutesConfig = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/home',
        element: Home,
        exact: false,
    },
    {
        path: '/js',
        element: Javascript,
        exact: false,
    },
    {
        path: '/vue',
        element: VueComponet,
        exact: false,
    },
];
export default RoutesConfig;

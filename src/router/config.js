// import Home from '../views/home';
import Javascript from '../views/js/js';
import VueComponet from '../views/vue/vue';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('../views/home'));
const CssCom = lazy(() => import('../views/css/css'));
const HtmlCom = lazy(() => import('../views/html/html'));
const RoutesConfig = [
    {
        path: '/',
        element: Home,

        children: [],
    },
    {
        path: '/home',
        element: Home,
    },
    {
        path: '/html',
        element: HtmlCom,
    },
    {
        path: '/js',
        element: Javascript,
    },
    {
        path: '/vue',
        element: VueComponet,
    },
    {
        path: '/css',
        element: CssCom,
    },
];
export default RoutesConfig;

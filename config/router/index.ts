import { IRouteProps } from 'umi';

const routes: IRouteProps[] = [
  { path: '/login', component: '@/pages/login' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/app' },
      { path: '/home', component: '@/pages/home' },
      { path: '/user', component: '@/pages/user' },
    ],
  },
  {
    path: '/404',
    component: '@/pages/404/index',
    title: '404',
  },
];
export default routes;

import { PageControl } from './PageControl';

export default {
  path: '',
  name: 'PageControl',
  childRoutes: [
    { path: '/pages/:path', name: 'page path', component: PageControl }
  ]
};

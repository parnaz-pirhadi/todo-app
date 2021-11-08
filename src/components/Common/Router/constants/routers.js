import {Boards, Foo, Bar} from 'components/Pages';

import routes from './routes';

const routers = [
  {
    path: routes.foo,
    exact: true,
    component: Foo,
  },
  {
    path: routes.bar,
    exact: true,
    component: Bar,
  },
  {
    path: routes.boards,
    exact: true,
    component: Boards,
  },
];

export default routers;

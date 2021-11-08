import React from 'react';
import {Switch, Route} from 'react-router-dom';

import routers from './constants/routers';

const Router = () => {
  const pages = routers.map(({
     path,
     exact,
     component: Component,
     props = {}
  }) => (
    <Route
      key={path.replace(/\//g, "_")}
      path={path}
      exact={exact}
      render={routeProps => <Component {...props} {...routeProps} />}
    />
  ))

  return <Switch>{pages}</Switch>;
};

export default Router;

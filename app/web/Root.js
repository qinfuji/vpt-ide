import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './common/history';

function renderRouteConfigV3(Container, routes, contextPath = '/') {
  // Resolve route config object in React Router v3.

  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      children.push(
        renderRouteConfigV3(item.component, item.childRoutes, newContextPath)
      );
    } else if (item.component) {
      children.push(
        <Route
            component={item.component}
            exact
            key={newContextPath}
            path={newContextPath}
        />
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch as the default container by default
  if (!Container) return <Switch>{children}</Switch>;

  return (
    <Container key={contextPath}>
      <Switch>{children}</Switch>
    </Container>
  );
}

export default class Root extends React.Component {
  static propTypes = {
    routeConfig: PropTypes.array.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const children = renderRouteConfigV3(null, this.props.routeConfig, '/');
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  }
}

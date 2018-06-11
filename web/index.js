import 'babel-polyfill';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import Root from './Root';
import routeConfig from './common/routeConfig';
import configStore from './common/configStore';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const store = configStore();
let root = document.getElementById('react-root');
if (!root) {
  root = document.createElement('div');
  root.id = 'react-root';
  document.body.appendChild(root);
}

function renderApp(app) {
  render(<AppContainer>{app}</AppContainer>, root);
}

renderApp(<Root routeConfig={routeConfig} store={store} />);

if (module.hot) {
  module.hot.accept();
}

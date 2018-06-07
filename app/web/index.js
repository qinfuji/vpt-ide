import 'babel-polyfill';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import io from 'socket.io-client';
import Root from './Root';
import routeConfig from './common/routeConfig';
import configStore from './common/configStore';

const store = configStore();

// if (process.env.NODE_ENV !== 'test') {
//   const socket = io();
//   socket.on('connect', () => {
//     console.log('[STUDIO] connected.');
//   });

//   socket.on('disconnect', () => {
//     console.log('[STUDIO] disconnected.');
//   });
// }

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

// if (module.hot) {
//   module.hot.accept('./common/routeConfig', () => {
//     const nextRouteConfig = require('./common/routeConfig').default; // eslint-disable-line
//     renderApp(<Root routeConfig={nextRouteConfig} store={store} />);
//   });
// }

if (module.hot) {
  module.hot.accept();
}

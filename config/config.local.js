const ip = require('ip');
const path = require('path');

module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.webpack = {
    webpackConfigList: [require(path.join(app.baseDir, 'webpack.config.js'))],
    proxy: {
      host: 'http://127.0.0.1:9000',
      match: /^\/public\//
    }
  };

  const localIP = ip.address();
  const domainWhiteList = [];
  [9000, 9001, 9002].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });
  exports.security = { domainWhiteList };

  return exports;
};

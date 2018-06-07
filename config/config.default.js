const path = require('path');

module.exports = app => {
  const exports = {};

  //中间件配置
  exports.middleware = ['auth', 'access'];

  //日志配置
  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  //静态文件配置
  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  //本地(用户名，密码)鉴权配置
  exports.passportLocal = {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  };

  //对象schema验证
  exports.joi = {
    options: {}, // Joi options [https://github.com/hapijs/joi/blob/v11.0.1/API.md#validatevalue-schema-options-callback]
    locale: {
      'zh-cn': {}
    },
    throw: true, // 是否自动抛出错误，默认 true
    errorHandle: error => {
      // throw === true    时错误信息统一处理函数
      return error;
    },
    throwHandle: error => {
      // throw === false   时错误信息统一处理函数
      return error;
    }
  };

  return exports;
};

// const LocalStrategy = require('passport-local').Strategy;
// const debug = require('debug');

const assert = require('assert');
const path = require('path');
const Joi = require('joi');

module.exports = app => {
  //处理验证信息
  const directory = path.join(app.config.baseDir, 'app/validator');
  app.Joi = Joi;
  app.loader.loadToApp(directory, 'validator');

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    console.log('app.passport.verify', user);
    assert(user.provider, 'user.provider should exists');
    assert(user.username, 'user.username should exists');
    assert(user.password, 'user.password should exists');
    return user;
  });
  app.passport.serializeUser(async (ctx, user) => {
    console.log('app.passport.serializeUser', user);
    return user;
  });
  app.passport.deserializeUser(async (ctx, user) => {
    console.log('app.passport.deserializeUser', user);
    user.realName = 'qinfuji';
    user.curProject = 'aaaaa';

    //保存对象到用户cookies
    ctx.cookies.set('userInfo', JSON.stringify(user), {
      httpOnly: false, // 默认就是 true
      encrypt: false // 加密传输
    });
    return user;
  });
};

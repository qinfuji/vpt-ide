// options === app.config.robot
module.exports = (options, app) => {
  return async function authMiddleware(ctx, next) {
    if (
      !ctx.isAuthenticated() &&
      ctx.path !== '/login' &&
      ctx.path !== '/logout' &&
      ctx.path !== '/public/login.html'
    ) {
      console.log('app.passport.isAuthenticated() false , redirect login');
      ctx.response.redirect('/public/login.html');
    } else {
      await next();
    }
  };
};

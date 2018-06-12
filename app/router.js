module.exports = app => {
  const { router } = app;

  router.get('logout', ctx => {});

  router.post(
    '/login',
    app.passport.authenticate('local', {
      successRedirect: '/user/curuser',
      failureRedirect: '/',
      failureFlash: true
    })
  );
  router.redirect('/', '/public/index.html'); //重定向到首页
};

module.exports = app => {
  const { router } = app;

  router.post(
    '/login',
    app.passport.authenticate('local', {
      successRedirect: '/public/index.html',
      failureRedirect: '/public/login.html',
      failureFlash: true
    })
  );
  router.redirect('/', '/public/index.html'); //重定向到首页

  //app.router.get('/project/data', controller.project.data);
};

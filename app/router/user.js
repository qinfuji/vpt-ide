module.exports = app => {
  const { info, userProjects } = app.controller.user;

  info && app.router.get('/users/:id', info);
  userProjects && app.router.get('/users/:uid/projecs', userProjects);
};

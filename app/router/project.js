module.exports = app => {
  const {
    data,
    setting,
    components,
    depnetenties,
    addDependent,
    addComponent,
    create,
    userProjects
  } = app.controller.project;

  /**
   * 项目数据
   */
  app.router.get('/projects/:id', data);
  // /**
  //  * 项目配置信息
  //  */
  setting && app.router.get('/projects/:id/setting', setting);

  /**
   *项目可使用（编辑）的组件列表
   */
  components && app.router.get('/projects/:id/components', components);

  /**
   * 项目依赖库
   */
  depnetenties && app.router.get('/projects/:id/dependenties', depnetenties);

  /**
   * 添加项目依赖
   */
  addDependent && app.router.post('/peojects/:id/addDependent', addDependent);

  /**
   *  增加
   */
  addComponent && app.router.post('/projects/:id/addComponent', addComponent);

  /**
   * 创建项目
   */
  create && app.router.post('/projects/cerate', create);

  /**
   * 得到当前用户的项目列表
   */
  userProjects && app.router.get('/projects/user/:userId', userProjects);
};

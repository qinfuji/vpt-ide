module.exports = app => {
  return class ProjectController extends app.Controller {
    /**
     * 获取当前用户选择项目的数据信息
     */
    async data() {
      const { ctx } = this;
      console.log('user', this.ctx.user);
      ctx.body = {
        components: [], //可以选择的组件
        dependencies: {}, //项目依赖
        projectInfo: {}, //项目基本信息
        theme: {}, //主题配置
        setting: {}, //想念哦全局设置
        projectStructure: {
          pages: [], //页面
          layout: {}, //布局信息
          libs: {} //项目通用库
        } //当前项目文件信息
      };
    }

    /**
     * 添加可以编辑的组件
     */
    async addComponent() {}
    /**
     * 创建项目
     */
    async create() {}
    /**
     * 安装依赖库,第三方库
     */
    async addDependent() {}
  };
};

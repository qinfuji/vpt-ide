const initialState = {
  //当前项目
  project: {
    components: [], //可以选择的组件
    dependencies: {}, //项目依赖
    projectInfo: {}, //项目基本信息
    theme: {}, //主题配置
    setting: {}, //想念哦全局设置
    structure: {
      pages: [], //页面
      layout: {}, //布局信息
      libs: {} //项目通用库
    }
  },
  setting: {}, //全局设置
  user: null //用户信息
};

export default initialState;

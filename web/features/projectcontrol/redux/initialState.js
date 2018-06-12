const initialState = {
  components: [], //可以选择的组件
  dependencies: {}, //项目依赖
  projectInfo: {}, //项目基本信息
  structure: {
    pages: [], //页面
    layout: {}, //布局信息
    libs: {} //项目通用库
  }
};

export default initialState;

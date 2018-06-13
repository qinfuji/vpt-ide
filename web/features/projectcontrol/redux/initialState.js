// const initialState = {
//   //项目信息加载状态
//   projectInfoFetchState: null,
//   //当前项目信息
//   projectInfo: {
//     components: [], //可以选择的组件
//     dependencies: {}, //项目依赖
//     projectInfo: {}, //项目基本信息
//     structure: {
//       pages: [], //页面
//       layout: {}, //布局信息
//       libs: {} //项目通用库
//     }
//   },
//   //页面信息加载状态
//   pageInfoFetchState: null,
//   //页面信息
//   pageInfo: {
//     view: null,
//     event: null,
//     state: null
//   },
//   //页面结构
//   pageOutline: null,
//   //选择组件的可编辑信息，为propertiesEditor使用
//   componentPropsInfo: null
// };

const initialState = {
  //项目信息加载状态
  projectInfoFetchState: null,
  //当前项目信息
  projectInfo: null,
  //页面信息加载状态
  pageInfoFetchState: null,
  //页面信息
  pageInfo: null,
  //页面结构
  pageOutline: null,
  //选择组件的可编辑信息，为propertiesEditor使用
  componentPropsInfo: null
};

export default initialState;

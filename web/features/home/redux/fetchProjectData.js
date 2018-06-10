import _ from 'lodash';
import axios from 'axios';

import {
  FETCH_PROJECT_DATA_BEGIN,
  FETCH_PROJECT_DATA_SUCCESS,
  FETCH_PROJECT_DATA_FAILURE
} from './constants';

export function fetchProjectData(projectInfo) {
  return dispatch => {
    dispatch({
      type: FETCH_PROJECT_DATA_BEGIN
    });
    return new Promise((resolve, reject) => {
      console.log('start fetchProjectData');
      //let pid = projectInfo.id;
      //let url = '/projects/11';

      axios.get('/projects/11').then(
        res => {
          console.log('----->', res);
          if (window.ON_VPT_LOAD) window.ON_VPT_LOAD();
          dispatch({
            type: FETCH_PROJECT_DATA_SUCCESS,
            data: res.data
          });
          resolve(res.data);
        },
        err => {
          console.log('--->', err);
          if (window.ON_VPT_LOAD) window.ON_VPT_LOAD();
          dispatch({
            type: FETCH_PROJECT_DATA_FAILURE,
            data: { error: err }
          });
          reject(err);
        }
      );
    });
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_PROJECT_DATA_BEGIN:
      return {
        ...state,
        fetchProjectDataPending: true,
        fetchProjectDataError: null
      };

    case FETCH_PROJECT_DATA_SUCCESS: {
      return {
        ...state,
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
        projectDataNeedReload: false,
        fetchProjectDataPending: false,
        fetchProjectDataError: null
      };
    }
    case FETCH_PROJECT_DATA_FAILURE:
      return {
        ...state,
        fetchProjectDataPending: false,
        fetchProjectDataError: action.data.error
      };

    default:
      return state;
  }
}

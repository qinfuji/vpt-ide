import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import {
  MessageBar,
  MessageBarType
} from 'office-ui-fabric-react/lib/MessageBar';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from './redux/constants';

import { select, showme, fetchProjects } from './redux/actions';
import { changeproject } from '../projectcontrol/redux/actions';

import * as styles from './index.scss';

class SelectProject extends BaseComponent {
  state = {};

  render() {
    let { showme, fetchStatus } = this.props.selectProject;
    return (
      showme && (
        <Dialog
            dialogContentProps={{
            type: DialogType.close,
            title: '项目列表'
          }}
            hidden={false}
            modalProps={{
            onLayerDidMount: this._fatchProjects.bind(this),
            isBlocking: true,
            containerClassName: 'selectproject-dialogMainOverride'
          }}
            onDismiss={this._close.bind(this)}
        >
          <div className={styles.projectList}>
            {FETCH_PROJECTS_BEGIN == fetchStatus && this._renderSpinner()}
            {FETCH_PROJECTS_SUCCESS == fetchStatus && this._renderProjectList()}
            {FETCH_PROJECTS_FAILURE == fetchStatus && this._renderSpinner()}
          </div>
        </Dialog>
      )
    );
  }

  _fatchProjects() {
    let { fetchProjects } = this.props.actions;
    fetchProjects();
  }

  _close() {
    let { showme } = this.props.actions;
    showme(false);
  }

  _renderProjectList() {
    return <div>我是项目列表</div>;
  }

  _renderSpinner() {
    return (
      <div>
        <Spinner size={SpinnerSize.medium} />
      </div>
    );
  }

  _renderErrMessage() {
    <div>
      <MessageBar
          dismissButtonAriaLabel="Close"
          isMultiline={false}
          messageBarType={MessageBarType.error}
      >
        加载项目失败，请重新加载
      </MessageBar>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    selectProject: state.selectProject
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ select, showme, fetchProjects }, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectProject);

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import classnames from 'classnames';
import { SplitPane, Pane } from 'vpt-components';
import ToolBox from './ToolsBox';
import ProjectExplorer from './ProjectExplorer';
import PageControl from '../pagecontrol';
import Dependencies from './Dependencies';

import { showme as openProjectSelector } from '../selectproject/redux/actions';

import styles from './styles/ProjectControl.scss';

class ProjectControl extends BaseComponent {
  state = {
    curTabkey: 'toolbox'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { projectInfo } = this.props.projectControl;
    let { openProjectSelector } = this.props.actions;
    if (!projectInfo) {
      openProjectSelector(true);
    }
  }

  render() {
    let { projectInfo } = this.props.projectControl;
    return (
      <SplitPane split="vertical">
        <Pane initialSize="250px" minSize="220px">
          <div className={styles.root}>
            <div className={styles.controlPanel}>
              <OverflowSet
                  items={[
                  { key: 'projectExplorer', name: '项目结构' },
                  { key: 'toolbox', name: '工具栏' },
                  { key: 'dependencies', name: '项目依赖' }
                ]}
                  onRenderItem={this._onRenterItem.bind(this)}
                  vertical
              />
            </div>
            {projectInfo && this._renderViewPanel(projectInfo)}
          </div>
        </Pane>
        <Pane>{projectInfo && <PageControl />}</Pane>
      </SplitPane>
    );
  }

  _renderViewPanel(projectInfo) {
    console.log(projectInfo);
    let { curTabkey } = this.state;
    return (
      <div className={styles.viewPanel}>
        <div className={styles.viewPanel_content}>
          {curTabkey == 'projectExplorer' && <ProjectExplorer />}
          {curTabkey == 'toolbox' && <ToolBox items={projectInfo.components} />}
          {curTabkey == 'dependencies' && (
            <Dependencies items={projectInfo.dependencies} />
          )}
        </div>
      </div>
    );
  }

  _onRenterItem(item) {
    let { curTabkey } = this.state;
    let cx = classnames(styles.controlTab, {
      [styles.contrrolTab_active]: item.key == curTabkey
    });
    return (
      <TooltipHost
          calloutProps={{
          directionalHint: DirectionalHint.rightCenter,
          beakWidth: 12
        }}
          content={item.name}
      >
        <div
            className={cx}
            onClick={this._tabsClickHandle.bind(this, item.key)}
        >
          {item.name}
        </div>
      </TooltipHost>
    );
  }

  _tabsClickHandle(tabKey) {
    this.setState({ curTabkey: tabKey });
  }
}

function mapStateToProps(state) {
  return {
    projectControl: state.projectControl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ openProjectSelector }, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectControl);

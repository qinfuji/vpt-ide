import * as React from 'react';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import classnames from 'classnames';
import ToolBox from './ToolsBox';
import ProjectExplorer from './ProjectExplorer';
import Dependencies from './Dependencies';
import styles from './styles/ProjectControl.scss';

class ProjectControl extends BaseComponent {
  state = {
    curTabkey: 'projectExplorer'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
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
        {this._renderViewPanel()}
      </div>
    );
  }

  _renderViewPanel() {
    let { curTabkey } = this.state;
    return (
      <div className={styles.viewPanel}>
        <div>我是标题</div>
        {curTabkey == 'projectExplorer' && <ProjectExplorer />}
        {curTabkey == 'toolbox' && <ToolBox />}
        {curTabkey == 'dependencies' && <Dependencies />}
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

export default ProjectControl;

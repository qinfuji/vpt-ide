import React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { showme as openProjectSelector } from '../selectproject/redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const noop = () => {};
class TopMenu extends React.Component {
  state = {
    current: 'mail'
  };

  getMenuData() {
    let { openProjectSelector } = this.props.actions;
    return [
      {
        key: 'file',
        name: '文件',
        cacheKey: 'fileCacheKey',
        subMenuProps: {
          items: [
            {
              key: 'create-project',
              name: '创建项目',
              iconProps: { iconName: 'ProjectLogo32' },
              onClick: noop
            },
            {
              key: 'open-project',
              name: '打开项目',
              iconProps: { iconName: 'FabricOpenFolderHorizontal' },
              onClick: openProjectSelector.bind(this, true)
            },
            {
              key: 'close-project',
              name: '关闭项目',
              onClick: noop
            },
            {
              key: 'divider_1',
              itemType: ContextualMenuItemType.Divider
            },

            {
              key: 'project-setting',
              name: '项目设置',
              iconProps: { iconName: 'Settings' },
              onClick: noop
            },
            {
              key: 'project-structure',
              name: '项目结构',
              onClick: noop
            },

            {
              key: 'project-export',
              iconProps: { iconName: 'Download' },
              name: '导出项目',
              onClick: noop
            }
          ]
        }
      },
      {
        key: 'edit',
        name: '编辑'
      }
    ];
  }

  render() {
    let menuData = this.getMenuData();
    return (
      <div className="top-menu">
        <CommandBar items={menuData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ openProjectSelector }, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);

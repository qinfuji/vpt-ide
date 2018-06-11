import React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';

const getMenuData = itemClick => {
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
            onClick: itemClick
          },
          {
            key: 'open-project',
            name: '打开项目',
            iconProps: { iconName: 'FabricOpenFolderHorizontal' },
            onClick: itemClick
          },
          {
            key: 'close-project',
            name: '关闭项目',
            onClick: itemClick
          },
          {
            key: 'divider_1',
            itemType: ContextualMenuItemType.Divider
          },

          {
            key: 'project-setting',
            name: '项目设置',
            iconProps: { iconName: 'Settings' },
            onClick: itemClick
          },
          {
            key: 'project-structure',
            name: '项目结构',
            onClick: itemClick
          },

          {
            key: 'project-export',
            iconProps: { iconName: 'Download' },
            name: '导出项目',
            onClick: itemClick
          }
        ]
      }
    },
    {
      key: 'edit',
      name: '编辑'
    }
  ];
};

class TopMenu extends React.Component {
  state = {
    current: 'mail'
  };

  render() {
    let menuData = getMenuData(e => {
      console.log('click ', e);
    });
    console.log(menuData);
    return (
      <div className="top-menu">
        <CommandBar items={menuData} />
      </div>
    );
  }
}

export default TopMenu;

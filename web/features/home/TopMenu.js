import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopMenu extends React.Component {
  state = {
    current: 'mail'
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="top-menu">
        <Menu
            inlineIndent="50"
            mode="horizontal"
            onClick={this.handleClick}
            selectable={false}
            selectedKeys={[this.state.current]}
        >
          <SubMenu
              title={
              <span>
                <Icon type="mail" />文件
              </span>
            }
          >
            <Menu.Item key="setting:1">
              <Icon type="" />创建项目
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Icon type="folder-open" />打开项目
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Icon type="" />关闭项目
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="setting:4">
              <Icon type="setting" />项目设置
            </Menu.Item>
            <Menu.Item key="setting:5">
              <Icon type="profile" />项目结构
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="setting:6">
              <Icon type="profile" />导出项目
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="app">
            <Icon type="appstore" />编辑
          </Menu.Item>
          <SubMenu
              title={
              <span>
                <Icon type="setting" />选择
              </span>
            }
          >
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">查看</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TopMenu;

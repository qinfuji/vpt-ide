import React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { TooltipHost, TooltipDelay } from 'office-ui-fabric-react/lib/Tooltip';
import { List } from 'office-ui-fabric-react/lib/List';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import * as styles from './styles/ToolsBox.scss';
class ToolsBox extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  _onRenderCell(item, index) {
    return (
      <div className={styles.toolListItem}>
        <Image
            className={styles['toolListItem-itemImage']}
            height={20}
            imageFit={ImageFit.cover}
            src={item.logo}
            width={30}
        />
        {item.name}
      </div>
    );
  }

  _renderToolList() {
    let { items } = this.props;
    return <List items={items} onRenderCell={this._onRenderCell} />;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <span className={styles.title}>工具箱</span>
          <span className={styles.tools}>
            <TooltipHost
                calloutProps={{
                directionalHint: DirectionalHint.topCenter
              }}
                content="刷新组件"
                delay={TooltipDelay.zero}
            >
              <Icon className={styles.toolsIcon} iconName="refresh" />
            </TooltipHost>
            <TooltipHost
                calloutProps={{
                directionalHint: DirectionalHint.topCenter
              }}
                content="添加组件"
                delay={TooltipDelay.zero}
            >
              <Icon className={styles.toolsIcon} iconName="add" />
            </TooltipHost>
          </span>
        </div>
        <div className={styles.toolList}>{this._renderToolList()}</div>
      </div>
    );
  }
}

export default ToolsBox;

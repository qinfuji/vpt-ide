import React from 'react';
import { BaseComponent, createRef } from 'office-ui-fabric-react/lib/Utilities';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { TooltipHost, TooltipDelay } from 'office-ui-fabric-react/lib/Tooltip';
import { List } from 'office-ui-fabric-react/lib/List';
//import { GroupedList } from 'office-ui-fabric-react/lib/GroupedList';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
import {
  Selection,
  SelectionMode,
  SelectionZone
} from 'office-ui-fabric-react/lib/Selection';
//import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { DragDropHelper } from 'office-ui-fabric-react/lib/utilities/dragdrop';
import * as styles from './styles/ToolsBox.scss';
class ToolsBox extends BaseComponent {
  constructor(props) {
    super(props);

    let selection = new Selection({
      getKey: this._getKey,
      selectionMode: SelectionMode.single
    });
    this.state = {
      selection: selection
    };
    let { items } = this.props;
    this.state.selection.setItems(items, false);
    this.dragDropHelper = new DragDropHelper({ selection });
    this.activeDrag = []; //注册的可拖动对象
  }

  _getKey(item) {
    return item.id;
  }

  _getDragDropEvents() {
    return {
      canDrop: (dropContext, dragContext) => {
        return false;
      },
      canDrag: item => {
        return true;
      },
      onDragEnter: (item, event) => {
        console.log('onDragEnter', item);
        return 'dragEnter';
      }, // return string is the css classes that will be added to the entering element.
      onDragLeave: (item, event) => {
        console.log('onDragLeave', item);
        return;
      },
      onDrop: (item, event) => {
        console.log('onDrop', arguments);
      },
      onDragStart: (item, itemIndex, selectedItems, event) => {
        console.log('onDragStart', item, itemIndex, selectedItems);
      },
      onDragEnd: (item, event) => {
        console.log('onDragEnd', item);
      }
    };
  }

  _getEventMap() {
    return {
      dragend: () => {
        console.log('dragend');
      }
    };
  }

  _select(item, index) {
    console.log('--->', index, item);
  }

  _mountDrag(item, itemIndex) {
    return ele => {
      let unsubscribe = this.dragDropHelper.subscribe(ele, this._events, {
        eventMap: this._getEventMap(),
        selectionIndex: itemIndex,
        context: { data: item, index: itemIndex },
        ...this._getDragDropEvents()
      });
      this.activeDrag.push(unsubscribe);
    };
  }

  _onRenderCell(item, index) {
    return (
      <div
          className={styles.toolListItem}
          data-is-draggable
          data-selection-index={index}
          data-selection-invoke
          draggable
          ref={this._mountDrag.bind(this, item, index)()}
      >
        <Image
            className={styles['toolListItem-itemImage']}
            height={20}
            imageFit={ImageFit.cover}
            src={item.logo}
            width={30}
        />
        <div className={styles['toolListItem-name']}>{item.name}</div>

        <Icon
            className={styles['toolListItem-operationBtn']}
            iconName="Settings"
            onClick={() => {
            console.log('aaaa');
          }}
        />
      </div>
    );
  }

  _renderToolList() {
    let { items } = this.props;
    let { selection, dragDropHelper } = this.state;

    return (
      <SelectionZone
          onItemInvoked={this._select.bind(this)}
          selection={selection}
      >
        <List
            dragDropEvents={this._getDragDropEvents()}
            dragDropHelper={dragDropHelper}
            items={items}
            onRenderCell={this._onRenderCell.bind(this)}
            selection={selection}
        />
      </SelectionZone>
    );
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

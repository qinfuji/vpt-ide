import * as React from 'react';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import {
  FocusZone,
  FocusZoneDirection
} from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import {
  Selection,
  SelectionMode,
  SelectionZone
} from 'office-ui-fabric-react/lib/Selection';

import * as styles from './ProjectList.scss';

class ProjectList extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      selection: new Selection({
        getKey: this._getKey,
        selectionMode: SelectionMode.single
        //onSelectionChanged: this._onSelectionChanged.bind(this)
      })
    };
    let { items } = this.props;
    this.state.selection.setItems(items, false);
  }

  _getKey(item) {
    return item.id;
  }

  // componentDidMount(): void {
  //   this._hasMounted = true;
  // }

  render() {
    let { items } = this.props;
    let { selection } = this.state;
    return (
      <div
          className={styles['projectListContainer-container']}
          data-is-scrollable
      >
        <SelectionZone onItemInvoked={this._select} selection={selection}>
          <FocusZone direction={FocusZoneDirection.vertical}>
            <List items={items} onRenderCell={this._onRenderCell} />
          </FocusZone>
        </SelectionZone>
      </div>
    );
  }

  // _onSelectionChanged(): void {
  //   if (this._hasMounted) {
  //     this.forceUpdate();
  //   }
  // }

  _select(item, index) {
    console.log('_select', item, index);
  }

  _onRenderCell(item, index, isScrolling) {
    return (
      <div
          className={styles['projectListContainer-itemCell']}
          data-is-focusable
          data-selection-index={index}
          data-selection-invoke
          data-selection-select /* 一般该属性用于<a>标签的情况，在事件触发前执行*/
      >
        <Image
            className={styles['projectListContainer-itemImage']}
            height={50}
            imageFit={ImageFit.cover}
            src={isScrolling ? undefined : item.logo}
            width={50}
        />
        <div className={styles['projectListContainer-itemContent']}>
          <div className={styles['projectListContainer-itemName']}>
            {item.name}
          </div>
          <div
              className={styles['projectListContainer-itemIndex']}
          >{`Item ${index}`}</div>
        </div>
      </div>
    );
  }
}

export default ProjectList;

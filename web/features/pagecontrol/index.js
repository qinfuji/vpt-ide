import * as React from 'react';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { SplitPane, Pane } from 'vpt-components';
class PageControl extends BaseComponent {
  render() {
    return (
      <SplitPane split="vertical">
        <Pane>我是编辑层</Pane>
        <Pane initialSize="355px" minSize="220px">
          <SplitPane split="horizontal">
            <Pane initialSize="380px" minSize="220px">
              Pageoutline
            </Pane>
            <Pane>Properties</Pane>
          </SplitPane>
        </Pane>
      </SplitPane>
    );
  }
}

export default PageControl;

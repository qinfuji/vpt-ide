import * as React from 'react';
import {
  BaseComponent,
  divProperties,
  getNativeProps,
  customizable,
  classNamesFunction
} from 'office-ui-fabric-react/lib/Utilities';
import { ITabsProps, ITabsStyleProps, ITabsStyles } from './Tabs.types';

const getClassNames = classNamesFunction<ITabsStyleProps, ITabsStyles>();

@customizable('Tabs', ['theme'])
export class TabsBase extends BaseComponent<ITabsProps, {}> {
  public render(): JSX.Element {
    const { children, className, theme, styles } = this.props;
    const classNames = getClassNames(styles, {
      className,
      theme: theme!
    });
    return (
      <RootType
        {...getNativeProps(this.props, divProperties)}
        className={classNames.root}
      >
        {children}
      </RootType>
    );
  }
}

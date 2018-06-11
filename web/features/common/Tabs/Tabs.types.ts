import * as React from 'react';
import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import {
  IComponentAs,
  IStyleFunctionOrObject
} from 'office-ui-fabric-react/lib/Utilities';

export interface ITabs {}

export interface ITabsProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  componentRef?: (component: ITabs | null) => void;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Styles for the label.
   */
  styles?: IStyleFunctionOrObject<ITabsStyleProps, ITabsStyles>;
}

export interface ITabsStyles {
  root: IStyle;
}

export interface ITabsStyleProps {
  theme: ITheme;
  className?: string;
}

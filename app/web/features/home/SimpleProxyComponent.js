import React from 'react';
import PropTypes from 'prop-types';

class SimpleProxyComponent extends React.Component {
  static propTypes = {
    component: PropTypes.element
  };

  render() {
    return this.props.component;
  }
}

export default SimpleProxyComponent;

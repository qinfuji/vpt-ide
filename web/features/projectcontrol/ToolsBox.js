import React from 'react';

class ToolsBox extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return <div>ToolBox</div>;
  }
}

export default ToolsBox;

import React from 'react';

class ProjectExplorer extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return (
      <div>
        <div>ProjectExplorer</div>
        <div>我是文件内容</div>
      </div>
    );
  }
}

export default ProjectExplorer;

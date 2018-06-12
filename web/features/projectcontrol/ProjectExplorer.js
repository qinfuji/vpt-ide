import React from 'react';
import { ScrollablePane } from 'office-ui-fabric-react/lib/ScrollablePane';
class ProjectExplorer extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return <ScrollablePane />;
  }
}

export default ProjectExplorer;

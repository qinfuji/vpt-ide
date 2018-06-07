import React from 'react';
import styled from 'styled-components';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid #455274;
  background-color: #fff;
`;

class ProjectExplorer extends React.Component {
  render() {
    return (
      <Container>
        <Tree defaultExpandedKeys={['0-0-0']} onSelect={this.onSelect} showLine>
          <TreeNode key="0-0" title="parent 1">
            <TreeNode key="0-0-0" title="parent 1-0">
              <TreeNode key="0-0-0-0" title="leaf" />
              <TreeNode key="0-0-0-1" title="leaf" />
              <TreeNode key="0-0-0-2" title="leaf" />
            </TreeNode>
            <TreeNode key="0-0-1" title="parent 1-1">
              <TreeNode key="0-0-1-0" title="leaf" />
            </TreeNode>
            <TreeNode key="0-0-2" title="parent 1-2">
              <TreeNode key="0-0-2-0" title="leaf" />
              <TreeNode key="0-0-2-1" title="leaf" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Container>
    );
  }
}

export default ProjectExplorer;

/**
 * pagecomponents tree
 */

import React from 'react';
import { Tree } from 'antd';
import styled from 'styled-components';
const TreeNode = Tree.TreeNode;

const PageOutlineHead = styled.div`
  height: 25px;
  line-height: 25px;
  background-color: #455274;
  color: #ffff;
  padding-left: 10px;
`;

const PageOutlingContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffff;
`;

class PageOutline extends React.Component {
  genTree() {
    return (
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
    );
  }

  render() {
    let outlineTree = this.genTree();
    return (
      <PageOutlingContainer>
        <PageOutlineHead key="head">页面结构 Explorer</PageOutlineHead>
        {outlineTree}
      </PageOutlingContainer>
    );
  }
}

export default PageOutline;

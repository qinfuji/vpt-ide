import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const tabkey = {
  PROPERTY: 'Property',
  STYLE: 'Style',
  EVENT: 'Event',
  LAYOUT: 'Layout'
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

class PropertiesEditor extends React.Component {
  tabsChange(activeKey) {
    console.log(activeKey);
  }

  render() {
    return (
      <Container>
        <Tabs onChange={this.tabsChange.bind(this)} type="card">
          <TabPane key="Property" tab={tabkey.PROPERTY} />
          <TabPane key="Style" tab={tabkey.STYLE} />
          <TabPane key="Event" tab={tabkey.EVENT} />
          <TabPane key="Layout" tab={tabkey.LAYOUT} />
        </Tabs>
        <Content />
      </Container>
    );
  }
}

export default PropertiesEditor;

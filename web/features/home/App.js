import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider, Modal, Spin } from 'antd';
import { SidePanel, TopMenu, PageOutline, PropertiesEditor } from './';
import { fetchProjectData } from './redux/actions';
import { SplitPane, Pane } from 'vpt-components';
import styled from 'styled-components';
import cookies from 'js-cookie';

const AppContainer = styled.div``;

export class App extends React.Component {
  static propTypes = {
    //home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
    //user: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.fetchProjectData().catch(err => {
      Modal.error({
        title: 'Failed to load project data',
        content: err && (err.message || err.toString())
      });
    });
  }

  renderLoading() {
    return (
      <div className="home-app loading">
        <Spin />
        <span style={{ marginLeft: 20 }}>Loading...</span>
      </div>
    );
  }

  render() {
    // if (!this.project) {
    //   return this.renderLoading();
    // }
    //let userInfo = cookies.get('userInfo');
    //console.log('userInfo', JSON.parse(userInfo));
    return (
      <LocaleProvider locale={enUS}>
        <div className="home-app">
          <TopMenu />
          <SplitPane split="vertical">
            <Pane initialSize="225px" minSize="220px">
              <SidePanel />
            </Pane>
            <Pane>编辑层</Pane>
            <Pane initialSize="320px" minSize="278px">
              <SplitPane split="horizontal">
                <Pane initialSize="25%">
                  <PageOutline />
                </Pane>
                <Pane>
                  <PropertiesEditor />
                </Pane>
              </SplitPane>
            </Pane>
          </SplitPane>
        </div>
      </LocaleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    //user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchProjectData }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from './redux/actions';
import { SplitPane, Pane } from 'vpt-components';
import TopMenu from './TopMenu';
import ProjectControl from '../projectcontrol';
import PageControl from '../pagecontrol';
import Login from './Login';

export class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  renderLoading() {
    return (
      <div className="home-app loading">
        <span style={{ marginLeft: 20 }}>Loading...</span>
      </div>
    );
  }

  render() {
    console.log(this.props);
    let { userInfo } = this.props;
    console.log(userInfo);
    console.log(typeof userInfo);
    if (typeof user === undefined || !userInfo) {
      return <Login />;
    } else {
      return (
        <div className="home-app">
          <TopMenu />
          <SplitPane split="vertical">
            <Pane initialSize="225px" minSize="220px">
              <ProjectControl />
            </Pane>
            <Pane>
              <PageControl />
            </Pane>
          </SplitPane>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.app.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setUser }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

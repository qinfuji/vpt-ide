import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { connect } from 'react-redux';
import { setUser } from './redux/actions';
import { SplitPane, Pane } from 'vpt-components';
import TopMenu from './TopMenu';
import ProjectControl from '../projectcontrol';
import PageControl from '../pagecontrol';
import Login from './Login';
import styles from './styles/App.scss';
import overTheme from './appTheme.json';
export class App extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const finalTheme = loadTheme({ ...{ palette: overTheme } });
    document.body.style.backgroundColor =
      finalTheme.semanticColors.bodyBackground;
    document.body.style.color = finalTheme.semanticColors.bodyText;
  }

  renderLoading() {
    return (
      <div className="home-app loading">
        <span style={{ marginLeft: 20 }}>Loading...</span>
      </div>
    );
  }

  render() {
    let { userInfo } = this.props;
    if (!userInfo) {
      return <Login />;
    } else {
      return (
        <div className="home-app">
          <div className={styles.appToolbar}>
            <TopMenu />
          </div>
          <div className={styles.appWorkspace}>
            <ProjectControl />
          </div>
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

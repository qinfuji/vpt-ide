import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { Overlay } from 'office-ui-fabric-react/lib/Overlay';
import { login } from './redux/login';
import { LOGIN_BEGIN } from './redux/constants';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

//import * as styles from './styles/Login.less';

class Login extends BaseComponent {
  state = {
    username: '',
    password: '',
    usernameErr: '',
    passwordErr: ''
  };
  handLogin() {
    let username = this.username.value;
    let password = this.password.value;
    if (!username) {
      this.state = {
        usernameErr: 'username is required'
      };
      return;
    }
    if (!password) {
      this.state = {
        passwordErr: 'apssword is required'
      };
      return;
    }
    let { login } = this.props.actions;
    login(username, password);
  }

  render() {
    let { usernameErr, passwordErr } = this.state;
    let { loginStatus } = this.props;
    return (
      <Dialog
          dialogContentProps={{
          type: DialogType.largeHeader,
          title: '登录'
        }}
          hidden={false}
          modalProps={{
          isBlocking: false,
          containerClassName: 'ms-dialogMainOverride'
        }}
      >
        <div>
          {loginStatus &&
            loginStatus.status == LOGIN_BEGIN && (
              <Overlay onClick={this._setVisibilityFalse}>
                <Spinner size={SpinnerSize.medium} />
              </Overlay>
            )}
          <TextField
              componentRef={input => {
              this.username = input;
            }}
              errorMessage={usernameErr}
              label="用户名"
              required
          />
          <TextField
              componentRef={input => {
              this.password = input;
            }}
              errorMessage={passwordErr}
              label="密码"
              required
              type="password"
          />
        </div>
        <div>
          <PrimaryButton onClick={this.handLogin.bind(this)} text="登录" />
        </div>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginStatus: state.app.loginStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ login }, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

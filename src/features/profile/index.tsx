import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {
  setLogin,
  setToken,
  actionSignIn,
  logout,
} from '../../reduxs/profile/action';
import {getIsLogin, getFetchSignIn} from '../../reduxs/profile/selector';
import {SignIn, MyProfile} from './pages/Profile';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
  fetchSignIn: getFetchSignIn(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setLogin: (data: any) => setLogin(data),
      actionSignIn: (data: any) => actionSignIn(data),
      setToken: (data: any) => setToken(data),
      logout: () => logout(),
    },
    dispatch,
  );

const Default = (props: any) => {
  const {isLogin} = props;
  return isLogin ? <MyProfile {...props} /> : <SignIn {...props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

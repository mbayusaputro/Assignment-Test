import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {
  setLogin,
  setToken,
  actionSignIn,
  logout,
  actionGetProfile,
} from '../../reduxs/profile/action';
import {
  getIsLogin,
  getFetchSignIn,
  getProfile,
  getFetchProfile,
} from '../../reduxs/profile/selector';
import {SignIn, MyProfile, Agent} from './pages/Profile';
import {oc} from 'ts-optchain';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
  fetchSignIn: getFetchSignIn(state),
  profile: getProfile(state),
  fetchProfile: getFetchProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setLogin: (data: any) => setLogin(data),
      actionSignIn: (data: any) => actionSignIn(data),
      setToken: (data: any) => setToken(data),
      logout: () => logout(),
      actionGetProfile: (token: any) => actionGetProfile(token),
    },
    dispatch,
  );

const Default = (props: any) => {
  const {isLogin, profile} = props;
  // return isLogin ? <MyProfile {...props} /> : <SignIn {...props} />;
  return isLogin ? (
    profile && profile.isAgent ? (
      <Agent {...props} />
    ) : (
      <MyProfile {...props} />
    )
  ) : (
    <SignIn {...props} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Default);

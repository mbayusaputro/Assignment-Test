import React from 'react';
// Redux
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionUpdateProfile} from '../../../../reduxs/profile/action';
import {
  getProfile,
  getFetchUpdateProfile,
  getIsLogin,
  getToken,
} from '../../../../reduxs/profile/selector';
// Component
import ProfileEdit from './screens';

const mapStateToProps = (state: any) => ({
  profile: getProfile(state),
  fetchUpdate: getFetchUpdateProfile(state),
  isLogin: getIsLogin(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionUpdateProfile: (token: string, payload: object) =>
        actionUpdateProfile(token, payload),
    },
    dispatch,
  );

const Default = (props: any) => <ProfileEdit {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

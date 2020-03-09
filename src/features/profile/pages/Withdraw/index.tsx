import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionChangePasswordUser} from '../../../../reduxs/profile/action';
import {
  getFetchChangePassUser,
  getToken,
} from '../../../../reduxs/profile/selector';
import ChangePassword from './screens';

const mapStateToProps = (state: any) => ({
  fetchChangePassword: getFetchChangePassUser(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionChangePasswordUser: (token: string, payload: object) =>
        actionChangePasswordUser(token, payload),
    },
    dispatch,
  );

const Default = (props: any) => <ChangePassword {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

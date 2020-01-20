import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionForgotPassword} from '../../../../reduxs/profile/action';
import {getFetchForgotPass} from '../../../../reduxs/profile/selector';
import ForgotPassword from './screens';

const mapStateToProps = (state: any) => ({
  fetchForgotPass: getFetchForgotPass(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionForgotPassword: (type: string, payload: object) =>
        actionForgotPassword(type, payload),
    },
    dispatch,
  );

const Default = (props: any) => <ForgotPassword {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

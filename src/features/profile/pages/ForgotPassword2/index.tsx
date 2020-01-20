import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionForgotPassword2} from '../../../../reduxs/profile/action';
import {getFetchForgotPass} from '../../../../reduxs/profile/selector';
import ForgotPassword2 from './screens';

const mapStateToProps = (state: any) => ({
  fetchForgotPass: getFetchForgotPass(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionForgotPassword2: (type: string, payload: object) =>
        actionForgotPassword2(type, payload),
    },
    dispatch,
  );

const Default = (props: any) => <ForgotPassword2 {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionForgotPassword3} from '../../../../reduxs/profile/action';
import {getFetchForgotPass} from '../../../../reduxs/profile/selector';
import ForgotPassword3 from './screens';

const mapStateToProps = (state: any) => ({
  fetchForgotPass: getFetchForgotPass(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionForgotPassword3: (type: string, payload: object) =>
        actionForgotPassword3(type, payload),
    },
    dispatch,
  );

const Default = (props: any) => <ForgotPassword3 {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

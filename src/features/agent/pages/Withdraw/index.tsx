import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionWithdraw} from '../../../../reduxs/agent/action';
import {getToken, getProfile} from '../../../../reduxs/profile/selector';
import Withdraw from './screens';

const mapStateToProps = (state: any) => ({
  isLoading: state.agent.fetchWithdraw,
  token: getToken(state),
  profile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionWithdraw: (token: string, payload: object) =>
        actionWithdraw(token, payload),
    },
    dispatch,
  );

const Default = (props: any) => <Withdraw {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionReport} from '../../../../reduxs/agent/action';
import {getToken} from '../../../../reduxs/profile/selector';
import Content from './screens';

const mapStateToProps = (state: any) => ({
  token: getToken(state),
  isLoading: state.agent.fetchReport,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onReport: (token: string, payload: object) =>
        actionReport(token, payload),
    },
    dispatch,
  );

const Default = (props: any) => <Content {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

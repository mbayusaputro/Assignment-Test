import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionAllPack} from '../../../../reduxs/agent/action';
import {getToken, getProfile} from '../../../../reduxs/profile/selector';
import Content from './screens';

const mapStateToProps = (state: any) => ({
  token: getToken(state),
  isLoading: state.agent.fetchAllPack,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onAllPack: (token: string) => actionAllPack(token),
    },
    dispatch,
  );

const Default = (props: any) => <Content {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionTopUp} from '../../../../reduxs/agent/action';
import {actionGetProfile} from '../../../../reduxs/profile/action';
import {getToken, getProfile} from '../../../../reduxs/profile/selector';
import Content from './screens';

const mapStateToProps = (state: any) => ({
  token: getToken(state),
  profile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionTopUp: (token: string, payload: object) =>
        actionTopUp(token, payload),
      getProfile: (token: string) => actionGetProfile(token),
    },
    dispatch,
  );

const Default = (props: any) => <Content {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

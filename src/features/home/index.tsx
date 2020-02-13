import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionHolidayList} from '../../reduxs/holiday/action';
import {getIsLogin, getToken} from '../../reduxs/profile/selector';
import {getFetchHolidayList} from '../../reduxs/holiday/selector';
import Home from './screen/Home';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
  token: getToken(state),
  fetchList: getFetchHolidayList(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayList: (token: any) => actionHolidayList(token),
    },
    dispatch,
  );

const Default = (props: any) => <Home {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

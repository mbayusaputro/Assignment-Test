import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionHolidayList} from '../../reduxs/holiday/action';
import {getIsLogin, getToken, getProfile} from '../../reduxs/profile/selector';
import {getFetchHolidayList} from '../../reduxs/holiday/selector';
import Home from './screen/Home';
import {
  actionAddon,
  actionDataFlight,
  actionDataHoliday,
  actionDataHotel,
} from '../../reduxs/holiday/action';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
  token: getToken(state),
  fetchList: getFetchHolidayList(state),
  isProfile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayList: (token: any) => actionHolidayList(token),
      actionAddon: (data: boolean) => actionAddon(data),
      actionDataHoliday: (data: any) => actionDataHoliday(data),
      actionDataHotel: (data: any) => actionDataHotel(data),
      actionDataFlight: (data: any) => actionDataFlight(data),
    },
    dispatch,
  );

const Default = (props: any) => <Home {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionHolidayBook} from '../../../../reduxs/holiday/action';
import {
  getFetchHolidayBook,
  getDataFlight,
  getDataHotel,
  getDataHoliday,
} from '../../../../reduxs/holiday/selector';
import {
  getIsLogin,
  getToken,
  getProfile,
} from '../../../../reduxs/profile/selector';
import HolidayBooking from './screens';

const mapStateToProps = (state: any) => ({
  isLoading: getFetchHolidayBook(state),
  flight: getDataFlight(state),
  hotel: getDataHotel(state),
  holiday: getDataHoliday(state),
  isLogin: getIsLogin(state),
  token: getToken(state),
  isProfile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayBook: (payload: object, token: string) =>
        actionHolidayBook(payload, token),
    },
    dispatch,
  );

const Default = (props: any) => <HolidayBooking {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

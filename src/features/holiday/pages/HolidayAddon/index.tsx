import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  actionAddon,
  actionDataFlight,
  actionDataHoliday,
  actionDataHotel,
} from '../../../../reduxs/holiday/action';
import {
  getAddon,
  getDataHoliday,
  getDataFlight,
  getDataHotel,
} from '../../../../reduxs/holiday/selector';
import HolidayAddon from './screens';

const mapStateToProps = (state: any) => ({
  addon: getAddon(state),
  holiday: getDataHoliday(state),
  hotel: getDataHotel(state),
  flight: getDataFlight(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionAddon: (data: boolean) => actionAddon(data),
      actionDataHoliday: (data: any) => actionDataHoliday(data),
      actionDataHotel: (data: any) => actionDataHotel(data),
      actionDataFlight: (data: any) => actionDataFlight(data),
    },
    dispatch,
  );

const Default = (props: any) => <HolidayAddon {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

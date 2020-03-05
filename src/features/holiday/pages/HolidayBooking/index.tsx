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
import HolidayBooking from './screens';

const mapStateToProps = (state: any) => ({
  isLoading: getFetchHolidayBook(state),
  flight: getDataFlight(state),
  hotel: getDataHotel(state),
  holiday: getDataHoliday(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayBook: (id: number, payload: object) =>
        actionHolidayBook(id, payload),
    },
    dispatch,
  );

const Default = (props: any) => <HolidayBooking {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

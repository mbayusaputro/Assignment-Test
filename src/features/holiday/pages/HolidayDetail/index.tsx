import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionHolidayDetail} from '../../../../reduxs/holiday/action';
import {getFetchHolidayDetail} from '../../../../reduxs/holiday/selector';
import {getIsLogin, getToken} from '../../../../reduxs/profile/selector';
import HolidayDetail from './screens';

const mapStateToProps = (state: any) => ({
  fetchDetail: getFetchHolidayDetail(state),
  isLogin: getIsLogin(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayDetail: (token: string, id: number) =>
        actionHolidayDetail(token, id),
    },
    dispatch,
  );

const Default = (props: any) => <HolidayDetail {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

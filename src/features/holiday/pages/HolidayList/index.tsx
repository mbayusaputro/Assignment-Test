import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {getFetchHolidayList} from '../../../../reduxs/holiday/selector';
import {actionHolidayList} from '../../../../reduxs/holiday/action';
import {getIsLogin, getToken} from '../../../../reduxs/profile/selector';
import HolidatList from './screens';

const mapStateToProps = (state: any) => ({
  fetchList: getFetchHolidayList(state),
  isLogin: getIsLogin(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayList: (token: string) => actionHolidayList(token),
    },
    dispatch,
  );

const Default = (props: any) => <HolidatList {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

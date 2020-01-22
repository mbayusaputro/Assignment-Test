import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionFlightsOrderHistory} from '../../../../reduxs/flight/action';
import {
  getFetchFlightsOrderHistory,
  getFlightsOrderHistory,
} from '../../../../reduxs/flight/selector';
import {getToken, getIsLogin} from '../../../../reduxs/profile/selector';
import Orders from '../MyOrders/screens';

const mapStateToProps = (state: any) => ({
  fetchOrder: getFetchFlightsOrderHistory(state),
  dataFlightOrder: getFlightsOrderHistory(state),
  isLogin: getIsLogin(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionFlightsOrderHistory: (token: string) =>
        actionFlightsOrderHistory(token),
    },
    dispatch,
  );

const Default = (props: any) => <Orders {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

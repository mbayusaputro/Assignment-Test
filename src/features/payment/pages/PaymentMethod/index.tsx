import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionPaymentMidtrans} from '../../../../reduxs/payment/action';
import {getFetchPayMidtrans} from '../../../../reduxs/payment/selector';
import PaymentMethod from './screens';

const mapStateToProps = (state: any) => ({
  fetchPayment: getFetchPayMidtrans(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionPaymentMidtrans: (payload: any) => actionPaymentMidtrans(payload),
    },
    dispatch,
  );

const Default = (props: any) => <PaymentMethod {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionCheckPaymentMidtrans} from '../../../../reduxs/payment/action';
import {getFetchCheckPayment} from '../../../../reduxs/payment/selector';
import PaymentWeb from './screens';

const mapStateToProps = (state: any) => ({
  fetchCheck: getFetchCheckPayment(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionCheckPaymentMidtrans: (id: string, type: string) =>
        actionCheckPaymentMidtrans(id, type),
    },
    dispatch,
  );

const Default = (props: any) => <PaymentWeb {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);

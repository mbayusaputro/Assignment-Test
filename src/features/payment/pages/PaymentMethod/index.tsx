import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionPayment} from '../../../../reduxs/payment/action';
import {getFetchPayMidtrans} from '../../../../reduxs/payment/selector';
import {getToken} from '../../../../reduxs/profile/selector';
import {actionGetProfile} from '../../../../reduxs/profile/action';
import PaymentMethod from './screens';

const mapStateToProps = (state: any) => ({
  fetchPayment: getFetchPayMidtrans(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionPayment: (payload: object, token: string) =>
        actionPayment(payload, token),
      getProfile: (token: string) => actionGetProfile(token),
    },
    dispatch,
  );

const Default = (props: any) => <PaymentMethod {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

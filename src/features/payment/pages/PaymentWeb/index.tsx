import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {
  actionCheckPayment,
  actionCheckTopUp,
} from '../../../../reduxs/payment/action';
import {getFetchCheckPayment} from '../../../../reduxs/payment/selector';
import {getToken} from '../../../../reduxs/profile/selector';
import PaymentWeb from './screens';

const mapStateToProps = (state: any) => ({
  fetchCheck: getFetchCheckPayment(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionCheckPayment: (id: string, type: string) =>
        actionCheckPayment(id, type),
      onCheckStatus: (id: string, token: string) => actionCheckTopUp(id, token),
    },
    dispatch,
  );

const Default = (props: any) => <PaymentWeb {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);

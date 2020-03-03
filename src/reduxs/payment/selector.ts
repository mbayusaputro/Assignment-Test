import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchPayMidtrans = (state: AppState) => state.payment.fetchPayment;
const makeFetchCheckPayment = (state: AppState) =>
  state.payment.fetchCheckStatus;

export const getFetchPayMidtrans = createSelector(makeFetchPayMidtrans, i => i);

export const getFetchCheckPayment = createSelector(
  makeFetchCheckPayment,
  i => i,
);

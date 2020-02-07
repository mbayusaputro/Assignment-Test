import {
  Action,
  State,
  PAYMIDTRANS,
  PAYMIDTRANS_SUCCESS,
  PAYMIDTRANS_FAILED,
  CHECK_PAYMENT,
  CHECK_PAYMENT_SUCCESS,
  CHECK_PAYMENT_FAILED,
} from './types';

const initialState: State = {
  // PAYMENT -> MIDTRANS
  fetchPayment: false,

  // PAYMENT -> CHECK PAYMENT MIDTRANS
  fetchCheckStatus: false,
};

export default (state: State = initialState, action: Action): State => {
  let {type} = action;
  switch (type) {
    // PAYMENT - MIDTRANS
    case PAYMIDTRANS:
      return {
        ...state,
        fetchPayment: true,
      };
    case PAYMIDTRANS_SUCCESS:
      return {
        ...state,
        fetchPayment: false,
      };
    case PAYMIDTRANS_FAILED:
      return {
        ...state,
        fetchPayment: false,
      };

    // PAYMENT - CHECK PAYMENT MIDTRANS
    case CHECK_PAYMENT:
      return {
        ...state,
        fetchCheckStatus: true,
      };
    case CHECK_PAYMENT_SUCCESS:
      return {
        ...state,
        fetchCheckStatus: false,
      };
    case CHECK_PAYMENT_FAILED:
      return {
        ...state,
        fetchCheckStatus: false,
      };

    default:
      return state;
  }
};
